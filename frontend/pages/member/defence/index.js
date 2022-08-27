import React from "react";
import Image_n_Box from "../../../components/member/defence/Image_n_Box";

const hospital = ({
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
        Welcome, Sir!
      </h4>
      <h4 className="mb-5">
        {" "}
        You can check & make complex query on health data.
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
