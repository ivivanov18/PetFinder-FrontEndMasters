import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props;
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    // let hero = "http://placecorgi.com/300/300";
    // if (photos[0] && photos[0].value) {
    //   hero = photos[0].value;
    // }
    const hero = photos[0] ? photos[0].value : "http://placecorgi.com/300/300";
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </Link>
    );
  }
}
// React.createElement("div", {}, [
//   React.createElement("h1", {}, props.name),
//   React.createElement("h2", {}, props.type),
//   React.createElement("h3", {}, props.breed)
// ]);

export default Pet;
