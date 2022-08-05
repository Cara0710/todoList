import React, { useState, useEffect, useRef } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./styles/index.css";

const Home = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);
  const [checkbox, setCheckbox] = useState(false);

  // get data and setData
  async function fetchDate(setData) {
    let res = await fetch(process.env.REACT_APP_URL);
    let { data } = await res.json();
    setData(data);
  }

  // if data change than put data
  async function fetchSetDate(data) {
    await fetch(process.env.REACT_APP_URL, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
  }

  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    console.log("put data is running");
    fetchSetDate(data).then(() => (submittingStatus.current = false));
  }, [data]);

  // initialize data
  useEffect(() => {
    return () => {
      fetchDate(setData);
      console.log("get data is running");
    };
  }, []);

  return (
    <div className="app">
      <Edit
        add={setData}
        checkbox={checkbox}
        submittingStatus={submittingStatus}
      />
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
        changeData={setData}
        setCheckbox={setCheckbox}
      />
    </div>
  );
};

export default Home;
