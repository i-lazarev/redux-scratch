import { combineReducers } from "redux";

const todoList = ["1","2","3","4","5"];

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
  if(action.type ==="MOVE_TO_TODO"){
      todoList.push(action.payload.inProgress)
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
  if (action.type === "DELETE_PROG") {
    inProgressList.splice(action.payload, 1);
    return [...inProgressList]; // return a new copy
  }
  if(action.type ==="MOVE_TO_TODO"){
      inProgressList.splice(action.payload.idx, 1);
      return [...inProgressList]; // return a new copy
  }
  if(action.type==="MOVE_TO_PROG"){
      inProgressList.push(action.payload.done)
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
  if (action.type === "DELETE_DONE") {
    donelist.splice(action.payload, 1);
    return [...donelist];
  }
  if(action.type === "MOVE_TO_PROG"){
      donelist.splice(action.payload.idx, 1)
      return [...donelist];
  }
  return done;
};

export default combineReducers({
  todos: todosReducer,
  inProgressList: inProgressReducer,
  doneList: doneReducer,
});
