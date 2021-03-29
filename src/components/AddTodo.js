import React, { useRef } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

const AddTodo = (props) => {
  const inputRef = useRef();
  const addBtn = () => {
    props.save(inputRef.current.value);
  };

  return (
    <div>
      <button onClick={addBtn}>Add</button>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default connect(null, { save: addTodo })(AddTodo);
