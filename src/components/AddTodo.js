import React, { useRef } from "react";

const AddTodo = (props) => {
  const inputRef = useRef();
  const addBtn = () => {
    props.save(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={addBtn}>Add</button>
    </div>
  );
};

export default AddTodo;
