import React from "react";
import Report from "../../../components/member/insurance/Report";

const ViewReport = ({ usrHealthData, newUsrAddr }) => {
  return (
    <div className="text-center my-5">
      <span className={`customText text-center mt-5`}>
        Health data history Of:
      </span>
      <span>{newUsrAddr}</span>
      <Report usrHealthData={usrHealthData} />
    </div>
  );
};

export default ViewReport;
