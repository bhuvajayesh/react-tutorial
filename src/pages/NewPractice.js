import React, { useState } from "react";

const NewPractice = () => {
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DesNum = () => {
    setCount(count - 1);
  };
  return (
    <>
      <hr />
      <h1>Counter {count}</h1>
      <button onClick={IncNum} className="btn btn-success">
        Click Me +
      </button>
      <button onClick={DesNum} className="btn btn-success ml-4">
        Click Me -
      </button>
      <hr />
    </>
  );
};

export default NewPractice;
