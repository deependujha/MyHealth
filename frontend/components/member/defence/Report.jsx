import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const Report = ({ usrHealthData }) => {
  return (
    <div className="mx-3 my-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>What</th>
            <th>Medicines</th>
            <th>Tag</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {usrHealthData.map((d, idx) => (
            <tr key={idx}>
              <td>{d.what}</td>
              <td>{d.medicines}</td>
              <td>{d.tags}</td>
              <td>{d.note}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Report;
