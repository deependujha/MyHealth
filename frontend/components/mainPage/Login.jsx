import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const Login = ({
  connectWithMetaMask,
  myOrg,
  setMyOrg,
  myContract,
  usrAddr,
}) => {
  const router = useRouter();

  const enterAsOrganization = async () => {
    if (myOrg === "Hospital") {
      myContract
        .hospitalOrg()
        .then((val) => {
          if (val === usrAddr) {
            router.push("/Organizations");
          } else {
            alert("You are not the Hospital Organization head.");
          }
        })
        .catch((err) =>
          console.log("Printing error msg at getText function: ", err.message)
        );
    } else if (myOrg === "Defence") {
      myContract
        .defenceOrg()
        .then((val) => {
          console.log(val);
          if (val === usrAddr) {
            router.push("/Organizations");
          } else {
            alert("You are not the Defence Organization head.");
          }
        })
        .catch((err) =>
          console.log("Printing error msg at getText function: ", err.message)
        );
    } else if (myOrg === "Insurance") {
      myContract
        .insuranceOrg()
        .then((val) => {
          if (val === usrAddr) {
            router.push("/Organizations");
          } else {
            alert("You are not the Insurance Organization head.");
          }
        })
        .catch((err) =>
          console.log("Printing error msg at getText function: ", err.message)
        );
    } else {
      myContract
        .dataAnalystOrg()
        .then((val) => {
          if (val === usrAddr) {
            router.push("/Organizations");
          } else {
            alert("You are not the Data Analyst Organization head.");
          }
        })
        .catch((err) =>
          console.log("Printing error msg at getText function: ", err.message)
        );
    }
  };

  const enterAsMember = async () => {
    if (myOrg === "Hospital") {
      myContract
        .allowed("hospital", usrAddr)
        .then((val) => {
          if (val) {
            router.push("/member/hospital");
          } else {
            alert("You are not the member of the organization.");
          }
        })
        .catch((err) =>
          console.log("Printing error msg at getText function: ", err.message)
        );
    } else if (myOrg === "Defence") {
      myContract
        .allowed("defence", usrAddr)
        .then((val) => {
          console.log(val);
          if (val) {
            router.push("/member/defence");
          } else {
            alert("You are not the member of the organization.");
          }
        })
        .catch((err) =>
          console.log("Printing error msg at getText function: ", err.message)
        );
    } else if (myOrg === "Insurance") {
      myContract
        .allowed("insurance", usrAddr)
        .then((val) => {
          if (val) {
            router.push("/member/insurance");
          } else {
            alert("You are not the member of the organization.");
          }
        })
        .catch((err) =>
          console.log("Printing error msg at getText function: ", err.message)
        );
    } else {
      myContract
        .allowed("dataAnalyst", usrAddr)
        .then((val) => {
          if (val) {
            router.push("/member/dataAnalyst");
          } else {
            alert("You are not the member of the organization.");
          }
        })
        .catch((err) =>
          console.log("Printing error msg at getText function: ", err.message)
        );
    }
  };
  return (
    <div className="d-grid gap-4">
      <div className="my-3">
        <strong>
          <h4>Select your organization:</h4>
        </strong>
        <button
          className={`btn btn-${
            myOrg == "Hospital" ? "success" : "outline-dark"
          } rounded-pill mx-1 my-1`}
          style={{ width: "175px" }}
          onClick={() => {
            setMyOrg("Hospital");
          }}
        >
          Hospital
        </button>
        <button
          className={`btn btn-${
            myOrg === "Defence" ? "success" : "outline-dark"
          } rounded-pill mx-1 my-1`}
          style={{ width: "175px" }}
          onClick={() => {
            setMyOrg("Defence");
          }}
        >
          Defence
        </button>

        <button
          className={`btn btn-${
            myOrg == "Insurance" ? "success" : "outline-dark"
          } rounded-pill mx-1 my-1`}
          style={{ width: "175px" }}
          onClick={() => {
            setMyOrg("Insurance");
          }}
        >
          Insurance
        </button>
        <button
          className={`btn btn-${
            myOrg === "Data Analysts" ? "success" : "outline-dark"
          } rounded-pill mx-1 my-1`}
          style={{ width: "175px" }}
          onClick={() => {
            setMyOrg("Data Analysts");
          }}
        >
          Data Analytics
        </button>
      </div>
      <Button
        disabled={myContract !== "" ? true : false}
        variant="primary"
        size="lg"
        onClick={() => {
          connectWithMetaMask();
        }}
      >
        Connect with MetaMask
      </Button>
      <Button
        disabled={myContract === "" ? true : false}
        variant="primary"
        size="lg"
        onClick={() => {
          enterAsOrganization();
        }}
      >
        Enter as an Organization
      </Button>
      <Button
        disabled={myContract === "" ? true : false}
        variant="primary"
        size="lg"
        onClick={() => {
          enterAsMember();
        }}
      >
        Enter as a Member
      </Button>
    </div>
  );
};

export default Login;
