import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import AddTodo from "./components/AddTodo";
import ShowTodos from "./components/ShowToDo";

import reducers from "./reducers";

const App = () => {
  // const [todoState, setTodoState] = useState([]);

  // const addTodo = (todo) => {
  //   setTodoState([...todoState, todo]);
  // };

  return (
    <div>
      {/* <h1>Functional component</h1>
      <AddTodo add={addTodo} />
      <ShowTodos list={todoState} /> */}
      <AddTodo />
      <ShowTodos />
    </div>
  );
};

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
