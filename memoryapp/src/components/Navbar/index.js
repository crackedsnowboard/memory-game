import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success justify-content-between">
          <a className="navbar-brand" href="#">Memory Game</a>
        <span className="navbar-text">
          Click an image to begin but don't click the same image twice!
        </span>
        <a className="nav-item justify-right">Score: {props.count} | Top Score: {props.topScore}</a>

    </nav>
  );
}

export default Navbar;
