import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const WriteReport = ({ usrAddr, newUsrAddr, setNewUsrAddr }) => {
  const [what, setWhat] = useState("");
  const [med, setMed] = useState("");
  const [tag, setTag] = useState("");
  const [remarks, setRemarks] = useState("");

  return (
    <div>
      <div className={`customText text-center my-5`}>
        MyHealth - Your health database
      </div>
      <div className="text-center">
        <h4 className="dancingText">Write health report:</h4>
        <div className="">
          <div className="d-flex justify-content-center">
            <div
              style={{
                border: "2px solid black",
                height: "500px",
                width: "500px",
                borderRadius: "20px",
              }}
            >
              <div className="text-center mt-3">Address:</div>
              <div className="input-group mt-1 mx-5" style={{ width: "400px" }}>
                <span className="input-group-text"> ⧫</span>
                <input
                  disabled
                  value={newUsrAddr}
                  onChange={(e) => {}}
                  type="text"
                  className="form-control"
                  aria-label="member's address"
                />
              </div>
              <div className="text-center mt-3">What:</div>
              <div className="input-group mt-1 mx-5" style={{ width: "400px" }}>
                <span className="input-group-text"> ⧫</span>
                <input
                  value={what}
                  onChange={(e) => {
                    setWhat(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  aria-label="member's address"
                />
              </div>
              <div className="text-center mt-3">Medicines prescribed:</div>
              <div className="input-group mt-1 mx-5" style={{ width: "400px" }}>
                <span className="input-group-text"> ⧫</span>
                <input
                  value={med}
                  onChange={(e) => {
                    setMed(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  aria-label="member's address"
                />
              </div>
              <div className="text-center mt-3">Tags:</div>
              <div className="input-group mt-1 mx-5" style={{ width: "400px" }}>
                <span className="input-group-text"> ⧫</span>
                <input
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  aria-label="member's address"
                />
              </div>

              <div className="text-center mt-3">Remarks:</div>

              <div className="input-group mt-1 mx-5" style={{ width: "400px" }}>
                <span className="input-group-text"> ⧫</span>
                <input
                  value={remarks}
                  onChange={(e) => {
                    setRemarks(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  aria-label="member's address"
                />
              </div>
              <div className="d-grid mx-5 mt-3">
                <Button
                  variant={"primary"}
                  className="mb-4"
                  size="lg"
                  onClick={() => {
                    console.log(
                      `Clicked on write health report. Usr: ${usrAddr}`
                    );
                  }}
                >
                  Write health report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReport;
