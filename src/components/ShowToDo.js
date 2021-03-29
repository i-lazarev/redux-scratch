import React from "react";
import { connect } from "react-redux";

const ShowTodos = (props) => {
  return (
    <ul>
      {props.todolist.map((el, inx) => (
        <li key={inx}>{el}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  // transforming states to props
  return {
    todolist: state.todos, // from reducers
  };
};

export default connect(mapStateToProps)(ShowTodos);
