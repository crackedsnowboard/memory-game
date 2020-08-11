import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <ul>
        <li>
          <a class="navbar-brand" href="#">Memory Game</a>
        </li>
        <span class="navbar-text">
          Click an image to begin but don't click the same image twice!
  </span>
        <li class="nav-item justify-right">Score: {props.count} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
