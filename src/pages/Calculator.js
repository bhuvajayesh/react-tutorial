import React from "react";

function add(a, b) {
  let sum = a + b;
  return sum;
}

function sub(a, b) {
  let sub = a - b;
  return sub;
}

function div(a, b) {
  let div = a / b;
  div = div.toFixed(2);
  return div;
}

function multi(a, b) {
  let multi = a * b;
  return multi;
}

function Calculator() {
  return (
    <>
      <ul>
        <li>{add(40, 4)}</li>
        <li>{sub(40, 4)}</li>
        <li>{div(40, 3)}</li>
        <li>{multi(40, 4)}</li>
      </ul>
    </>
  );
}
export default Calculator;
