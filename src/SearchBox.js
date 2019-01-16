import React, { Component } from "react";
import { connect } from "react-redux";

import { ANIMALS } from "petfinder-client";

import getBreeds from "./actions/getBreeds";
import changeLocation from "./actions/changeLocation";
import changeAnimal from "./actions/changeAnimal";
import changeBreed from "./actions/changeBreed";

class SearchBox extends Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: "",
    breeds: [],
    error: null
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="location">
            Location
            <input
              onChange={this.props.handleLocationChange}
              id="location"
              value={this.props.location}
              placeholder="Location"
            />
          </label>

          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
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
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
              disabled={!this.props.breeds.length}
            >
              <option />
              {this.props.breeds.map(breed => {
                return (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                );
              })}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ animal, breed, location, breeds }) => ({
  animal,
  breed,
  location,
  breeds
});

const mapDispatchToProps = dispatch => ({
  handleAnimalChange(event) {
    dispatch(changeAnimal(event.target.value));
    dispatch(getBreeds());
  },
  handleBreedChange(event) {
    dispatch(changeBreed(event.target.value));
  },
  handleLocationChange(event) {
    dispatch(changeLocation(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
