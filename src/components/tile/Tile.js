import React from "react";

const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="title-title">{name}</p>
      {Object.values(description).map((value, index) => (
        <p key={index} className="title">
          {value}
        </p>
      ))}
    </div>
  );
};

export default Tile;
