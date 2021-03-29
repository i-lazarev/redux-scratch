import React, { useState } from "react";

const AddTodo = (props) => {
  const [inputState, setInputState] = useState("");
  return (
    <div>
      <input
        value={inputState}
        type="text"
        placeholder="Enter your Todo"
        onChange={(e) => {
          setInputState(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputState.trim()) {
            props.add(inputState);
          }
          setInputState("");
        }}
        style={{
          background: "lightBlue",
          borderRadius: "8px",
          margin: "5px",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
