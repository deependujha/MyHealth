import React from "react";
import Add_n_Join from "../../components/orgz/Add_n_BanMember";
import Image_n_Box from "../../components/member/hospital/Image_n_Box";
const hospital = () => {
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
        <Image_n_Box />
      </div>
    </div>
  );
};

export default hospital;
