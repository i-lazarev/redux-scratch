import React from "react";
import { connect } from "react-redux";
import { addDone, deleteInProgress, moveToTodo } from "../actions";

const InProgress = (props) => {

  const doneBtn = (elm, idx) => {
    props.addDone(elm, idx);
  };

  const deleteBtn = (idx) => {
    props.deleteInProgress(idx);
  };
  
  const moveBtn = (elm, idx) => {
    props.moveToTodo(elm, idx);
  };

  return (
    <div>
      <h2>In Progress</h2>
      <ul>
        {props.progressList.map((elm, idx) => (
          <li key={idx}>
            {elm}
            <button onClick={() => {deleteBtn(idx)}}>Delete</button>
            <button onClick={() => {doneBtn(elm, idx)}}>Done</button>
            <button onClick={() => {moveBtn(elm, idx)}}>Back to ToDo's</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    progressList: state.inProgressList,
  };
};

export default connect(mapStateToProps, {
  addDone,
  deleteInProgress,
  moveToTodo,
})(InProgress);
