import React, { Component } from "react";

import { ANIMALS } from "petfinder-client";

import { Consumer } from "./SearchContext";

class SearchBox extends Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: "",
    breeds: [],
    error: null
  };

  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <label htmlFor="location">
              Location
              <input
                onChange={context.handleLocationChange}
                id="location"
                value={context.location}
                placeholder="Location"
              />
            </label>

            <label htmlFor="animal">
              Animal
              <select
                id="animal"
                value={context.animal}
                onChange={context.handleAnimalChange}
                onBlur={context.handleAnimalChange}
              >
                <option />
                {ANIMALS.map(animal => {
                  return (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  );
                })}
              </select>
            </label>
            <label htmlFor="breed">
              Breed
              <select
                id="breed"
                value={context.breed}
                onChange={context.handleBreedChange}
                onBlur={context.handleBreedChange}
                disabled={!context.breeds.length}
              >
                <option />
                {context.breeds.map(breed => {
                  return (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
        )}
      </Consumer>
    );
  }
}
export default SearchBox;
