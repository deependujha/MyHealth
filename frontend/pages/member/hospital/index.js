import React from "react";
import Image_n_Box from "../../../components/member/hospital/Image_n_Box";
const hospital = ({usrAddr, setUsrAddr, newUsrAddr, setNewUsrAddr}) => {
  return (
    <div className="text-center my-5">
      <h4
        className="text-primary dancingText mt-5 mb-2"
        style={{ fontSize: "30px" }}
      >
        Welcome, Doctor!
      </h4>
      <h4 className="mb-5"> You can check & write health data of a user.</h4>
      <div style={{}}>
        <Image_n_Box  newUsrAddr={newUsrAddr} setNewUsrAddr={setNewUsrAddr} />
      </div>
    </div>
  );
};

export default hospital;
