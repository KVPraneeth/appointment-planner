import React from "react";
import Tile from "../tile/Tile.js";

export const TileList = ({ objects = [] }) => {
  return (
    <div>
      {objects.map((object, index) => {
        const { name, ...description } = object;
        return <Tile key={index} name={name} description={description}></Tile>;
      })}
    </div>
  );
};
