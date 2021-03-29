import { combineReducers } from "redux";

const todoList = ["This is a todo"];

const todosReducer = (todos = todoList, action) => {
  if (action.type === "Add_TODO") {
    todoList.push(action.payload);
    return [...todoList]; // return a new copy
  }
  return todos;
};

export default combineReducers({
  todos: todosReducer,
});
