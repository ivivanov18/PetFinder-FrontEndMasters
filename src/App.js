import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleClick() {
    alert("You clicked title");
  }

  render() {
    // return React.createElement("div", {}, [
    //   React.createElement("h1", { onClick: this.handleClick }, "Adopt me"),
    //   React.createElement(Pet, { name: "Lua", type: "Dog", breed: "Havanese" }),
    //   React.createElement(Pet, { name: "Titi", type: "Bird", breed: "Yellow" }),
    //   React.createElement(Pet, { name: "Toto", type: "Dog", breed: "Dingo" })
    // ]);
    return (
      <div>
        <h1>Adopt me!!</h1>
        <Pet name="Lua" type="Dog" breed="Havanese" />
        <Pet name="Titi" type="Bird" breed="Yellow" />
        <Pet name="Toto" type="Dog" breed="Dingo" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
