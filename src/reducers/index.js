import { combineReducers } from "redux";

const todoList = [];

const todosReducer = (todos = todoList, action) => {
  if (action.type === "Add_TODO") {
    todoList.push(action.payload);
    return [...todoList]; // return a new copy
  }
  return todoList;
};

export default combineReducers({
  todos: todosReducer,
});
