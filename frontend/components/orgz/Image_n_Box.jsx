import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Orgz from "./Org";

const Image_n_Box = ({ clicked, myContract, newUsrAddr, setNewUsrAddr }) => {
  return (
    <div style={{ alignContent: "center" }}>
      <Container>
        <Row>
          <Col>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src={
                  clicked === "Add"
                    ? "/Images/add_or_ban/add.jpg"
                    : "/Images/add_or_ban/ban.jpg"
                }
                layout="fill"
              />
            </div>
          </Col>
          <Col className="my-auto">
            <Orgz
              clicked={clicked}
              myContract={myContract}
              newUsrAddr={newUsrAddr}
              setNewUsrAddr={setNewUsrAddr}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Image_n_Box;
