import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import SquareBox from "./SquareBox";

const Image_n_Box = ({}) => {
  return (
    <div style={{ alignContent: "center" }}>
      <Container>
        <Row>
          <Col>
            <div
              style={{
                width: "100%",
                height: "150%",
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image src="/Images/doctor/doctor.jpg" layout="fill" />
            </div>
          </Col>
          <Col>
            <SquareBox />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Image_n_Box;
