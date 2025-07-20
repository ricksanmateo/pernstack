import "./App.css";
import React, { Fragment } from "react";

// components
import InputTodo from "./components/inputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="className">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
