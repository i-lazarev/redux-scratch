import React from "react";
import { connect } from "react-redux";
import { deleteDone } from "../actions";

const Done = (props) => {
  const deleteBtn = (idx) => {
    props.deleteDone(idx);
  };
  return (
    <div>
      <h2>Done</h2>
      <ul>
        {props.doneList.map((elm, idx) => (
          <li key={idx}>
            {elm}
            <button
              onClick={() => {
                deleteBtn(idx);
              }}
            >
              Delete
            </button>
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

export default connect(mapStateToProps, { deleteDone })(Done);
