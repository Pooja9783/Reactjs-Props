import React from "react";

function Props(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <b>RS.{props.price}</b>
    </div>
  );
}
export default Props;
