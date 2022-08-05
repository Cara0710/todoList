import React from "react";

const Item = ({
  id,
  text,
  date,
  time,
  checkbox,
  deleteData,
  submittingStatus,
  changeData,
  listData,
  setCheckbox,
}) => {
  function handleDelete() {
    submittingStatus.current = true;
    deleteData(function (preData) {
      return preData.filter((item) => item.id !== id);
    });
  }

  function handleCheckbox(e) {
    let click = listData.find((item) => item.id === id);
    click.checkbox = !click.checkbox;
    setCheckbox(click.checkbox);
    submittingStatus.current = true;
    changeData([...listData]);
    setCheckbox(false);
  }
  return (
    <div className="item">
      <div className="checkbox">
        <input onChange={handleCheckbox} checked={checkbox} type="checkbox" />
      </div>
      <div>
        <p>{text}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={handleDelete} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;
