import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import SquareBox from "./SquareBox";

const Image_n_Box = ({
  newUsrAddr,
  setNewUsrAddr,
  myContract,
  setUsrHealthData,
}) => {
  return (
    <div style={{ alignContent: "center" }} className="my-5">
      <Container>
        <Row>
          <Col>
            <div
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image src="/Images/insurance/insurance.jpg" layout="fill" />
            </div>
          </Col>
          <Col
            className="row align-items-center"
            style={{ alignContent: "center" }}
          >
            <div className="row align-items-center">
              <SquareBox
                newUsrAddr={newUsrAddr}
                setNewUsrAddr={setNewUsrAddr}
                myContract={myContract}
                setUsrHealthData={setUsrHealthData}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Image_n_Box;
