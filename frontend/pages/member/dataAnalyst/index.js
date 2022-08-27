import React from "react";
import Image_n_Box from "../../../components/member/dataAnalytics/Image_n_Box";

const hospital = ({
  usrAddr,
  setUsrAddr,
  newUsrAddr,
  setNewUsrAddr,
  myContract,
  setUsrHealthData,
}) => {
  return (
    <div className="text-center my-5">
      <h4
        className="text-primary dancingText mt-5 mb-2"
        style={{ fontSize: "30px" }}
      >
        Welcome, Sir! We hope you have brought your analytical hat too.
      </h4>
      <h4 className="mb-5">
        {" "}
        You can perform complex query on the health data, and find insights.
      </h4>
      <div style={{}}>
        <Image_n_Box
          newUsrAddr={newUsrAddr}
          setNewUsrAddr={setNewUsrAddr}
          myContract={myContract}
          setUsrHealthData={setUsrHealthData}
        />
      </div>
    </div>
  );
};

export default hospital;
