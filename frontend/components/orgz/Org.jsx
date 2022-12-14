import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Orgz = ({ clicked, myContract, newUsrAddr, setNewUsrAddr }) => {

  const addOrBanMember = async () => {
    if (clicked === "Add") {
      myContract
        .allowEmployee(newUsrAddr)
        .then((val) => {
          alert("Member successfully added in the organization");
          setNewUsrAddr("");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      myContract
        .banEmployee(newUsrAddr)
        .then((val) => {
          alert("Member successfully baned from the organization");
          setNewUsrAddr("");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="d-flex justify-content-center my-5 ">
      <div
        style={{
          border: "2px solid black",
          height: "300px",
          width: "500px",
          borderRadius: "20px",
        }}
      >
        <div className="mt-5">Enter the address of member:</div>

        <div className="input-group mt-1 mx-5" style={{ width: "400px" }}>
          <span className="input-group-text"> ⧫</span>
          <input
            value={newUsrAddr}
            onChange={(e) => {
              setNewUsrAddr(e.target.value);
            }}
            type="text"
            className="form-control"
            aria-label="member's address"
          />
        </div>
        <div className="d-grid mx-5 my-5">
          <Button
            variant={clicked === "Add" ? "primary" : "danger"}
            size="lg"
            onClick={() => {
              if (newUsrAddr === "") {
                alert("Member's address can't be empty.");
                return;
              }
              addOrBanMember();
            }}
          >
            {clicked} the member
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Orgz;
