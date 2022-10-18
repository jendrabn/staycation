import React from "react";
import Fade from "react-reveal/Fade";

export default function Controller({ children }) {
  return (
    <Fade>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-3">{children}</div>
        </div>
      </div>
    </Fade>
  );
}
