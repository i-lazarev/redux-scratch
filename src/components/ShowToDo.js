import React from "react";
import { connect } from "react-redux";
import { deleteTodo, addInProgress } from "../actions";

const ShowTodos = (props) => {
  const deleteBtn = (index) => {
    props.delete(index);
  };
  const addInProgressBtn = (todo) => {
    props.addInProgress(todo);
  };

  return (
    <div>
      <h2>To-Do's</h2>
      <ul>
        {props.todolist.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button
              onClick={() => {
                deleteBtn(idx);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                addInProgressBtn(todo);
              }}
            >
              In Progress
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  // transforming states to props
  return {
    todolist: state.todos, // from reducers
  };
};

export default connect(mapStateToProps, { delete: deleteTodo, addInProgress })(
  ShowTodos
);
