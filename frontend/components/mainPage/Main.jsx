import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Login from "./Login";

const Main = () => {
  return (
    <div style={{ alignContent: "center" }}>
      <Container>
        <Row>
          <Col md="8">
            <div
              style={{ width: "100%", height: "100vh", position: "relative" }}
            >
              <Image src="/Images/MainPage/mainImage.jpg" layout="fill" />
            </div>
          </Col>
          <Col md="4" className="my-auto">
            <Login />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
