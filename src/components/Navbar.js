import React from "react";
import "../App.css";
import "./Navbar.css";
import logo from "../images/logocropped.png";

let isExpanded = false;
function toggleNav() {
  if (!isExpanded) {
    document.getElementById("collapse").style.display = "block";
    isExpanded = true;
    document.getElementById("menu").innerText = "\u2715";
    document.getElementById("overlay").style.display = "block";
  } else {
    document.getElementById("collapse").style.display = "none";
    isExpanded = false;
    document.getElementById("menu").innerText = "\u2630";
    document.getElementById("overlay").style.display = "none";
  }
}

const closeNav = () => {
  document.getElementById("collapse").style.display = "none";
  isExpanded = false;
  document.getElementById("menu").innerText = "\u2630";
  document.getElementById("overlay").style.display = "none";
};

export default function Navbar() {
  return (
    <nav>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Genesis16Motorsports" width="130" className="logo-img" />
          </a>
        </div>
        <div className="menu">
          <p id="menu" onClick={toggleNav}>
            &#9776;
          </p>
        </div>
        <div id="overlay" onClick={closeNav}>
          <div className="collapse-navbar" id="collapse">
            <ul className="nav-links">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sponsors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
