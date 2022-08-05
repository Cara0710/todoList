import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Edit = ({ add, submittingStatus, checkbox }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };

  function addItem() {
    submittingStatus.current = true;
    add(function (preData) {
      return [...preData, { id: uuidv4(), text, date, time, checkbox }];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>內容:</p>
      <input onChange={handleText} type="text" />
      <p>日期:</p>
      <input onChange={handleDate} type="date" />
      <p>時間:</p>
      <input onChange={handleTime} type="time" />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
