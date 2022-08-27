import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const SquareBox = ({
  newUsrAddr,
  setNewUsrAddr,
  myContract,
  setUsrHealthData,
}) => {
  const router = useRouter();

  const checkUsrData = async () => {
    myContract
      .viewData(newUsrAddr)
      .then((val) => {
        setUsrHealthData(val);
        router.push("/member/hospital/ViewReport");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <div
          style={{
            border: "2px solid black",
            height: "300px",
            width: "500px",
            borderRadius: "20px",
          }}
        >
          <div className="mt-5">Enter the address of user:</div>

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
          <div className="d-grid mx-5">
            <Button
              className="my-4"
              variant={"primary"}
              size="lg"
              onClick={() => {
                if (newUsrAddr === "") {
                  alert("User's address can't be empty.");
                  return;
                }
                console.log(
                  `Clicked on check health report. Usr: ${newUsrAddr}`
                );
                checkUsrData();
              }}
            >
              Check health report
            </Button>
            <Button
              variant={"primary"}
              className="mb-4"
              size="lg"
              onClick={() => {
                if (newUsrAddr === "") {
                  alert("User's address can't be empty.");
                  return;
                }
                console.log(
                  `Clicked on write health report. Usr: ${newUsrAddr}`
                );
                router.push("/member/hospital/WriteReport");
              }}
            >
              Write health report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareBox;
