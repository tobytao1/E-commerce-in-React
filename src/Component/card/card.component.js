import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return (
    <div>
      <h1 className="card">{props.monster.name}</h1>
    </div>
  );
};
