import React, { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MyTable from "../components/MyTable";

const query = () => {
  const [myTag, setMyTag] = useState("");
  const [myList, setMyList] = useState([]);

  useEffect(() => {}, [myList]);
  const btnTagPresent = async () => {
    axios
      .get(`http://localhost:5000/tagPresent/${myTag}`)
      .then((response) => {
        setMyList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const btnTagAbsent = async () => {
    axios
      .get(`http://localhost:5000/tagAbsent/${myTag}`)
      .then((response) => {
        setMyList(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-5 text-center">
      <div className={`customText text-center my-5`}>
        Query the database on the basis of tags
      </div>
      <span className="mx-3 my-3">
        <label htmlFor="fname">tag: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={myTag}
          onChange={(e) => {
            setMyTag(e.target.value);
          }}
        />
      </span>
      <Button
        variant="primary"
        onClick={() => {
          btnTagPresent();
        }}
      >
        tag present
      </Button>
      <Button
        className="mx-3"
        variant="danger"
        onClick={() => {
          btnTagAbsent();
        }}
      >
        tag absent
      </Button>
      <MyTable myList={myList} />
    </div>
  );
};

export default query;
