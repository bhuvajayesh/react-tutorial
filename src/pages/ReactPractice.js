import React from "react";
import Calculator from "./Calculator";

function ReactPractice() {
  //
  const fName = "Jayesh";
  const lName = "Bhuva";

  //
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  //
  // let curDate1 = new Date(2023, 8, 8, 22);
  let curDate1 = new Date();
  curDate1 = curDate1.getHours();
  let greeting = "";
  const cssStyle = {};

  if (curDate1 >= 1 && curDate1 < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate1 >= 12 && curDate1 < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "red";
  }
  //

  return (
    <>
      <Calculator />
      <br />
      <br />
      <h2 style={cssStyle}>{greeting}</h2>
      <h1>{`My name is ${fName} ${lName} `}</h1>
      <p>Current Date = {currentDate}</p>
      <p>Current Time = {currentTime}</p>
    </>
  );
}

export default ReactPractice;
