import { combineReducers } from "redux";

const todoList = ["This is a todo"];

const todosReducer = (todos = todoList, action) => {
  if (action.type === "ADD_TODO") {
    todoList.push(action.payload);
    return [...todoList]; // return a new copy
  }
  if (action.type === "DELETE_TODO") {
    todoList.splice(action.payload, 1);
    return [...todoList]; // return a new copy
  }
  return todos;
};

export default combineReducers({
  todos: todosReducer,
});
