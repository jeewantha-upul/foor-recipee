import React from "react";
import "./RecipeTile.css";

function RecipeTile({ recipe }) {
  return (
    <div>
      <img className="recipeTile__img" src={recipe["recipe"]["image"]} alt="" />
      <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeTile;
