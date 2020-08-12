import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="click-item" alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)}/>
      </div>
     
      {/* <span onClick={() => props.removeFriend(props.id)} data-value="pass" className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default FriendCard;
