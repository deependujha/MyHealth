import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const Login = ({ connectWithMetaMask, myOrg, setMyOrg }) => {
  const router = useRouter();

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
            myOrg === "Data Analytics" ? "success" : "outline-dark"
          } rounded-pill mx-1 my-1`}
          style={{ width: "175px" }}
          onClick={() => {
            setMyOrg("Data Analytics");
          }}
        >
          Data Analytics
        </button>
      </div>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          console.log(`${clicked} - org`);
          router.push("/Organizations/");
        }}
      >
        Enter as an Organization
      </Button>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          console.log(`${clicked} - member`);
          router.push("/member/hospital");
        }}
      >
        Enter as a Member
      </Button>
    </div>
  );
};

export default Login;
