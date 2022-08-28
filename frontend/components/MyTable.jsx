import React from "react";
import Table from "react-bootstrap/Table";

const MyTable = ({ myList }) => {
  return (
    <div className="mx-3 my-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Address</th>
            <th>All tags</th>
          </tr>
        </thead>
        <tbody>
          {myList.map((d, idx) => (
            <tr key={idx}>
              <td>{d.address}</td>
              <td>
                {d.tags.map((t, id) => {
                  return <span key={id}>{t}, </span>;
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyTable;
