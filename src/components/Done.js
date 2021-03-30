import React from "react";
import { connect } from "react-redux";
import { deleteDone, moveToProgress } from "../actions";

const Done = (props) => {


  return (
    <div>
      <h2>Done</h2>
      <ul>
        {props.doneList.map((elm, idx) => (
          <li key={idx}>
            {elm}
            <button onClick={() => { props.deleteDone(idx) }}>Delete</button>
            <button onClick={() =>{props.moveToProgress(elm,idx)}}>Back to in progress</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    doneList: state.doneList,
  };
};

export default connect(mapStateToProps, { deleteDone, moveToProgress })(Done);
