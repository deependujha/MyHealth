import React, { useState, useEffect } from "react";

const Add_n_Join = ({ clicked, setClicked }) => {
  return (
    <div className="mt-3 mb-5">
      <button
        className={`btn btn-${
          clicked == "Add" ? "primary" : "outline-dark"
        } rounded-pill mx-1`}
        style={{ width: "175px" }}
        onClick={() => {
          setClicked("Add");
        }}
      >
        Add Member
      </button>
      <button
        className={`btn btn-${
          clicked === "Ban" ? "primary" : "outline-dark"
        } rounded-pill mx-1`}
        style={{ width: "175px" }}
        onClick={() => {
          setClicked("Ban");
        }}
      >
        Ban Member
      </button>
    </div>
  );
};

export default Add_n_Join;
