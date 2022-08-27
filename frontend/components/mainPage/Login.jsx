import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const Login = () => {
  const [clicked, setClicked] = useState("Hospital");
  const router = useRouter();

  return (
    <div className="d-grid gap-4">
      <div className="my-3">
        <strong>
          <h4>Select your organization:</h4>
        </strong>
        <button
          className={`btn btn-${
            clicked == "Hospital" ? "success" : "outline-dark"
          } rounded-pill mx-1 my-1`}
          style={{ width: "175px" }}
          onClick={() => {
            setClicked("Hospital");
          }}
        >
          Hospital
        </button>
        <button
          className={`btn btn-${
            clicked === "Defence" ? "success" : "outline-dark"
          } rounded-pill mx-1 my-1`}
          style={{ width: "175px" }}
          onClick={() => {
            setClicked("Defence");
          }}
        >
          Defence
        </button>

        <button
          className={`btn btn-${
            clicked == "Insurance" ? "success" : "outline-dark"
          } rounded-pill mx-1 my-1`}
          style={{ width: "175px" }}
          onClick={() => {
            setClicked("Insurance");
          }}
        >
          Insurance
        </button>
        <button
          className={`btn btn-${
            clicked === "Data Analytics" ? "success" : "outline-dark"
          } rounded-pill mx-1 my-1`}
          style={{ width: "175px" }}
          onClick={() => {
            setClicked("Data Analytics");
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
        }}
      >
        Enter as a Member
      </Button>
    </div>
  );
};

export default Login;
