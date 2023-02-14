import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

export default function About() {
  return (
    <div className="vh-100 container pt-2 text-center d-flex justify-content-center align-items-center">
      <div className="card mb-3 about-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="img/yo.jpeg"
              className="img-fluid rounded-start "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title display-4 about-title">About</h5>
              <p className="card-text about-info">
                Hi, my name is Alexis, I'm 17 years old, I'm from Argentina.
                <br />I am currently a freelance developer specialized in Java
                language with an experience of 2 years, but I also have
                knowledge in JavaScript and TypeScript. with an ongoing
                trajectory in order to become a Backend Developer.
                <br />
                Currently I am about to start my career as a Computer Engineer,
                at the UBA university in Argentina.
              </p>

              <a
                href="https://github.com/alexissdev"
                className="about-buttom btn btn-primary w-25"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
