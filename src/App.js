import { useState } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./App.css";
import ReactPractice from "./pages/ReactPractice";
import ToDoLists from "./pages/Todolist";
import Sresult from "./pages/Sresult";

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
  // console.log(color);

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

  // onClick Count + 1
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };

  const IncNumMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Sorry, Zero Limit");
      setCount(0);
    }
  };

  // Current Time
  let currentTime = new Date().toLocaleTimeString("en-US");
  const [cTime, setCtime] = useState(currentTime);
  const getTime = () => {
    currentTime = new Date().toLocaleTimeString("en-US");
    setCtime(currentTime);
  };

  // Auto Time
  let autoUpdateTime = new Date().toLocaleTimeString("en-US");
  const [autoTime, setUCtime] = useState(autoUpdateTime);
  const getAutoTime = () => {
    autoUpdateTime = new Date().toLocaleTimeString("en-US");
    setUCtime(autoUpdateTime);
  };
  setInterval(getAutoTime, 1000);

  // Form
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();
  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const nameSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
  };

  // Todo List
  const [inputTodoList, setinputTodoList] = useState("buy apple");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputTodoList(event.target.value);
  };

  const plusList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputTodoList];
    });
    setinputTodoList("");
  };

  const deleteItem = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  // Search Result
  const [img, setImg] = useState("");
  const inputResult = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };

  return (
    <div className="react-demo">
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="w-50 m-auto">
        <input
          type="text"
          placeholder="Search"
          className="w-full form-control"
          value={img}
          onChange={inputResult}
        />
        {img === "" ? null : <Sresult imgName={img} />}
      </div>
      <hr />
      <div className="navbarLink flex gap-[20px]">
        <NavLink exact="true" activeClassName="active" to="/">
          About us
        </NavLink>
        <NavLink exact="true" activeClassName="active" to="/contact">
          Contact us
        </NavLink>
      </div>
      <hr />
      <div style={{ padding: "0 20px" }}>
        <input
          type="text"
          placeholder="Add a items"
          onChange={itemEvent}
          // value={inputTodoList}
          style={{ color: "#000", padding: "6px 12px" }}
        />
        <button
          style={{
            background: "purple",
            padding: "6px 20px",
            borderRadius: "0px",
          }}
          onClick={plusList}
        >
          +
        </button>
        <br />
        <br />
        <ul>
          {Items.map((itemVal, index) => {
            return (
              <ToDoLists
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItem}
              />
            );
          })}
        </ul>
      </div>
      <hr />
      <form onSubmit={nameSubmit}>
        <div
          style={{
            maxWidth: "50%",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <h1>Hello {fullName}</h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={inputEvent}
            value={name}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              outline: "0px",
              color: "#000",
              textAlign: "center",
            }}
          />
          <button
            type="submit"
            style={{
              background: "purple",
              padding: "6px 12px",
              borderRadius: "6px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <hr />
      <div className="current-time">
        <h1>{autoTime}</h1>
        <hr />
        <h1>{cTime}</h1>
        <button
          onClick={getTime}
          style={{
            background: "purple",
            padding: "6px 12px",
            borderRadius: "6px",
          }}
          data-sm-link-text="Remove All"
        >
          Get time
        </button>
      </div>
      <hr />
      <div className="click-btn">
        <h1>{count}</h1>
        <button
          onClick={IncNum}
          style={{ background: "#fff", color: "#000", padding: "6px 12px" }}
        >
          Click Me +
        </button>
        <button
          onClick={IncNumMinus}
          style={{
            background: "#fff",
            color: "#000",
            padding: "6px 12px",
            marginLeft: "10px",
          }}
        >
          Click Me -
        </button>
      </div>
      <hr />
      <ReactPractice />
      <hr />
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
