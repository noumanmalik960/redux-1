import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, reset } from "../store/action";

export const Counter = () => {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>INC</button> {counter}{" "}
      <button onClick={() => dispatch(decrement())}>DEC</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => dispatch(incrementByValue(Number(value)))}>
        INC_BY_VAL
      </button>
    </div>
  );
};
