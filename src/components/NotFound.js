import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./NotFound.css";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col vh-100 items-center gap-4 my-10 p-8">
        <h1 className="text-white/80 font-medium text-6xl text-center">404</h1>
        <p className="text-white/70 font-light text-lg text-center">
          The page has been not found.
        </p>
        <img src={"https://http.cat/404"} alt="http cat"  className="vh-90 error-img" />
      </div>
    </div>
  );
}
