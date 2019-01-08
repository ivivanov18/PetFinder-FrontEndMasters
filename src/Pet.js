import React from "react";

const Pet = props => (
  <div id="my-id">
    <h1>{props.name.toUpperCase()}</h1>
    <h2>{props.type}</h2>
    <h3>{props.breed}</h3>
  </div>
);
// React.createElement("div", {}, [
//   React.createElement("h1", {}, props.name),
//   React.createElement("h2", {}, props.type),
//   React.createElement("h3", {}, props.breed)
// ]);

export default Pet;
