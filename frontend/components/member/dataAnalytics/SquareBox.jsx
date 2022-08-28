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
        router.push("/member/defence/ViewReport");
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
            height: "400px",
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
            <div className="my-3">
              <div className="separator">
                <span className="mx-3">or</span>
              </div>
            </div>
            <Button
              variant={"primary"}
              className="my-4"
              size="lg"
              onClick={() => {
                console.log(
                  `Clicked on write health report. Usr: ${newUsrAddr}`
                );
                // alert("complex query function will be made soon");
                router.push("/query");
              }}
            >
              Make a query on health database
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareBox;
