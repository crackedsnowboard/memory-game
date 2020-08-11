import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <ul>
      <li>
        <a class="navbar-brand" href="#">Memory Game</a>
      </li>
      <li class="nav-item">Click an image to begin!</li>
      <li class="nav-item">Score: 0 | Top Score: 0</li>
      </ul>
    </nav>
  );
}

export default Navbar;
