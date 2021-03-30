export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodo = (idx) => {
  return {
    type: "DELETE_TODO",
    payload: idx,
  };
};

export const addInProgress = (todo, idx) => {
  return {
    type: "ADD_INPROGRESS",
    payload: { todo, idx },
  };
};

export const addDone = (inProgress, idx) => {
  return {
    type: "ADD_DONE",
    payload: { inProgress, idx },
  };
};

export const deleteInProgress = (idx) => {
  return {
    type: "DELETE_PROG",
    payload: idx,
  };
};

export const deleteDone = (idx) => {
  return {
    type: "DELETE_DONE",
    payload: idx,
  };
};

export const moveToTodo = (inProgress, idx) => {
  return {
    type: "MOVE_TO_TODO",
    payload: { inProgress, idx },
  };
};

export const moveToProgress = (done, idx) => {
    return {
        type: "MOVE_TO_PROG",
        payload: { done, idx },
    };
};