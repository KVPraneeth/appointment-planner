import React from "react";
import Tile from "../tile/Tile.js";

export const TileList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact, index) => {
        const { name, ...description } = contact;
        return <Tile key={index} name={name} description={description}></Tile>;
      })}
    </div>
  );
};
