import React from "react";
import { connect } from "react-redux";

const Done = (props) => {
  return (
    <div>
      <h2>Done</h2>
      <ul>
        {props.doneList.map((elm, idx) => (
          <li key={idx}>{elm}</li>
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

export default connect(mapStateToProps)(Done);
