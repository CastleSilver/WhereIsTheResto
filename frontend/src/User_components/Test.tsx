import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Test() {
  const dispatch = useDispatch();
  const number = useSelector((state: any) => state.number);
  console.log(number);

  const plus = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <button onClick={plus}>클릭</button>
      <h1>{number}</h1>
    </div>
  );
}

export default Test;
