import React from "react";
import Item from "./Item";

const List = ({
  listData,
  deleteData,
  submittingStatus,
  changeData,
  setCheckbox,
}) => {
  return (
    <div className="list">
      {listData.map((item) => {
        let { id, text, date, time, checkbox } = item;
        return (
          <Item
            key={id}
            id={id}
            text={text}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
            changeData={changeData}
            checkbox={checkbox}
            listData={listData}
            setCheckbox={setCheckbox}
          />
        );
      })}
    </div>
  );
};

export default List;
