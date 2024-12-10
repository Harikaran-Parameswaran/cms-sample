import React from "react";
import "./Card.css";

const Card = ({ image, title, onClick, tabIndex, onKeyDown }) => {
  return (
    <div
      className="card"
      onClick={onClick}
      tabIndex={tabIndex} // Make card focusable
      onKeyDown={onKeyDown} // Handle keyboard events
    >
      <img src={image} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
