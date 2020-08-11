import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="click-item" alt={props.name} src={props.image} onClick={props.handleIncrement}/>
      </div>
      {/* <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button> */}
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div> */}
      <span onClick={() => props.removeFriend(props.id)} data-value="pass" className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
