import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../ImageEffect.css"
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navigation-color">
        <div className="container">
          <a className="navbar-brand">
            <img src="img/logo.png" alt="" className="navigation-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/alexissdev"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img src="./img/github.svg" alt="" className="effect-img" />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://discord.gg/BWqqbXbUep"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img src="./img/discord.svg" className="effect-img" alt="" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
