import React from "react";
import { connect } from "react-redux";
import { addDone } from "../actions";

const InProgress = (props) => {
  const doneBtn = (elm, idx) => {
    props.addDone(elm, idx);
  };

  return (
    <div>
      <h2>In Progress</h2>
      <ul>
        {props.progressList.map((elm, idx) => (
          <li key={idx}>
            {elm}
            <button
              onClick={() => {
                doneBtn(elm, idx);
              }}
            >
              Done
            </button>
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

export default connect(mapStateToProps, { addDone })(InProgress);
