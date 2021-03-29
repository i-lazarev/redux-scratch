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
  if (action.type === "ADD_INPROGRESS") {
    todoList.splice(action.payload.idx, 1);
    return [...todoList];
  }
  return todos;
};

const inProgressList = [];

const inProgressReducer = (inProgress = inProgressList, action) => {
  if (action.type === "ADD_INPROGRESS") {
    inProgressList.push(action.payload.todo);
    return [...inProgressList];
  }
  if (action.type === "ADD_DONE") {
    inProgressList.splice(action.payload.idx, 1);
    return [...inProgressList];
  }

  return inProgress;
};

const donelist = [];

const doneReducer = (done = donelist, action) => {
  if (action.type === "ADD_DONE") {
    donelist.push(action.payload.inProgress);
    return [...donelist];
  }
  return done;
};

export default combineReducers({
  todos: todosReducer,
  inProgressList: inProgressReducer,
  doneList: doneReducer,
});
