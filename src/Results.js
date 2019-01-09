import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({ pets });
      });
  }

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
        {this.state.pets.map(pet => {
          const breed = Array.isArray(pet.breeds.breed)
            ? pet.breeds.breed.join(", ")
            : pet.breeds.breed;
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
