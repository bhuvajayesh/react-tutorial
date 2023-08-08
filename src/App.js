import { useState } from "react";
import { Table } from "react-bootstrap";
import "./App.css";

function App() {
  // const nameDemo = ["Jayesh", "Abhishek", "Pratik", "Armit"];
  const nameDemo = [
    {
      name: "jayesh",
      email: "jayesh@gmail.com",
      contact: "0000000000",
    },
    {
      name: "Abhishek",
      email: "abhishek@gmail.com",
      contact: "1111111111",
    },
    {
      name: "Armit",
      email: "armit@gmail.com",
      contact: "2222222222",
    },
    {
      name: "Ajay",
      email: "ajay@gmail.com",
      contact: "3333333333",
    },
  ];

  const people = [
    {
      name: "Jayesh",
      age: "28",
    },
    {
      name: "Armit",
      age: "65",
    },
    {
      name: "Ajay",
      age: "30",
    },
    {
      name: "Abhishek",
      age: "24",
    },
  ];

  const color = ["Orange", "Green", "Yellow", "Red"];
  color.pop();
  console.log(color);

  // Push Funcation
  const [names, setNames] = useState(["Alice", "Bob"]);
  const handleClick = () => {
    // 👇️ push to the end of the state array
    setNames((current) => [...current, "Carl"]);

    // 👇️ spread an array into the state array
    // setNames(current => [...current, ...['Carl', 'Delilah']]);

    // 👇️ push to the beginning of the state array
    // setNames(current => ['Zoey', ...current]);
  };

  const fName = "Jayesh";
  const lName = "Bhuva";

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

  return (
    <div className="react-demo">
      <h2 style={cssStyle}>{greeting}</h2>
      <h1>{`My name is ${fName} ${lName} `}</h1>
      <p>Current Date = {currentDate}</p>
      <p>Current Time = {currentTime}</p>
      <Table
        striped
        variant="dark"
        border={1}
        cellPadding={4}
        style={{ width: "100%", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {nameDemo.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <br />
      <ul className="d-flex gap-4 px-4 display-6">
        {people
          .filter((person) => person.age < 60)
          .map((filteredPerson, i) => (
            <li key={i}>{filteredPerson.name}</li>
          ))}
      </ul>
      <br />
      <br />
      {/* Push Funcation */}
      <button onClick={handleClick}>Push to state array</button>
      {names.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
      {/* Push Funcation */}
    </div>
  );
}

export default App;
