import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import AddTodo from "./components/AddTodo";
import ShowTodos from "./components/ShowToDo";
import InProgress from "./components/InProgress";
import Done from "./components/Done";

import reducers from "./reducers";

const App = () => {
  return (
    <div>
      <AddTodo />
      <ShowTodos />
      <InProgress />
      <Done />
    </div>
  );
};

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
