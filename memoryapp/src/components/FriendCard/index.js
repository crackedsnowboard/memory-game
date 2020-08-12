import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="click-item" alt={props.name} src={props.image} onClick={() => props.handleCardClick(props.id)}/>
      </div>
    </div>
  );
}

export default FriendCard;
