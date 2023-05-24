import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "plus") {
    return state + 1;
    //   } elseif(action.type === "minus"){
    //     return state - 1;
    //   } elseif(action.type === "multiply"){
    //     return state * 2;
  } else {
    return state - 1;
  }
};

function CounterRed() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>Plus</button>
      <br />
      <button onClick={() => dispatch({ type: "minus" })}>Minus</button>
      <br />
      <button onClick={() => dispatch({ type: "multiply" })}>
        Double the value
      </button>
      <br />
      <button onClick={() => dispatch({ type: "divide" })}>divide by 2</button>
    </div>
  );
}

export default CounterRed;
