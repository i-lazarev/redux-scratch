import React, { useState } from "react";
import ReactDOM from "react-dom";
import AddTodo from "./components/AddTodo";
import ShowTodos from "./components/ShowTodos";

const App = () => {
  const [todoState, setTodoState] = useState([]);

  const addTodo = (todo) => {
    setTodoState([...todoState, todo]);
  };

  return (
    <div>
      <h1>Functional component</h1>
      <AddTodo add={addTodo} />
      <ShowTodos list={todoState} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
