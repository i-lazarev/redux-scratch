import React from "react";

const ShowTodos = (props) => {
  return (
    <ul>
      {props.list.map((el, inx) => (
        <li key={inx}>{el}</li>
      ))}
    </ul>
  );
};

export default ShowTodos;
