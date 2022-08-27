// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title MyHealth
 *  -> Database for health of the citizens
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */

struct dataArr {
    string what;
    string medicines;
    string tags;
    string note;
}

struct dataStruct {
    dataArr[] record;
}

contract MyHealth {
    // 4 organizations:
    //  - Hospital Organization
    //  - Defence Organization
    //  - Insurance Organization
    //  - Data Analyst Organization

    address public hospitalOrg;
    address public defenceOrg;
    address public insuranceOrg;
    address public dataAnalystOrg;

    // mapping of user's address with their health data
    mapping(address => dataStruct) healthData;
    // mapping of organization & address with permission, if they are allowed to view data or not
    mapping(string => mapping(address => bool)) public allowed;

    constructor(
        address hos,
        address def,
        address ins,
        address dat
    ) {
        hospitalOrg = hos;
        defenceOrg = def;
        insuranceOrg = ins;
        dataAnalystOrg = dat;
    }

    modifier onlyOrgs() {
        require(
            msg.sender == hospitalOrg ||
                msg.sender == defenceOrg ||
                msg.sender == insuranceOrg ||
                msg.sender == dataAnalystOrg,
            "You are not the head of the organization."
        );
        _;
    }

    modifier onlyHospital() {
        require(
            allowed["hospital"][msg.sender],
            "You don't have required permissions to enter data."
        );
        _;
    }

    modifier onlyOrgEmployees() {
        require(
            allowed["hospital"][msg.sender] ||
                allowed["defence"][msg.sender] ||
                allowed["insurance"][msg.sender] ||
                allowed["dataAnalyst"][msg.sender],
            "You don't have permission."
        );
        _;
    }

    function allowEmployee(address addr) public onlyOrgs {
        if (msg.sender == hospitalOrg) {
            allowed["hospital"][addr] = true;
        } else if (msg.sender == defenceOrg) {
            allowed["defence"][addr] = true;
        } else if (msg.sender == insuranceOrg) {
            allowed["insurance"][addr] = true;
        } else {
            allowed["dataAnalyst"][addr] = true;
        }
    }

    function banEmployee(address addr) public onlyOrgs {
        if (msg.sender == hospitalOrg) {
            allowed["hospital"][addr] = false;
        } else if (msg.sender == defenceOrg) {
            allowed["defence"][addr] = false;
        } else if (msg.sender == insuranceOrg) {
            allowed["insurance"][addr] = false;
        } else {
            allowed["dataAnalyst"][addr] = false;
        }
    }

    function viewData(address person)
        public
        view
        onlyOrgEmployees
        returns (dataArr[] memory)
    {
        return healthData[person].record;
    }

    function enterData(
        address person,
        string memory _what,
        string memory _med,
        string memory _tags,
        string memory _note
    ) public onlyHospital {
        healthData[person].record.push(dataArr(_what, _med, _tags, _note));
    }
}
