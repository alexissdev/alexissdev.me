import React from "react";
import Button from "react-bootstrap/Button"

import "bootstrap/dist/css/bootstrap.min.css";
import "../button/Button.css";
import "./HomeButtons.css"

export default function HomeButtons() {
  return (
    <div className="row">
      <div className="col">
        <Button href="https://github.com/alexissdev">
          <img src="img/github.svg" className="effect-img home-image" alt="" />
        </Button>
      </div>

      <div className="col">
        <Button href="https://discord.gg/BWqqbXbUep">
          <img src="img/discord.svg" className="effect-img home-image" alt="" />
        </Button>
      </div>

      <div className="col">
        <Button href="https://www.youtube.com/@alexissdev">
          <img src="img/youtube.svg" className="effect-img home-image" alt="" />
        </Button>
      </div>
    </div>
  );
}
