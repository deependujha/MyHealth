import React from "react";
import Report from "../../../components/member/hospital/Report";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
