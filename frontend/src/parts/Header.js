import React from "react";
import IconText from "./IconText";
import Button from "../elements/Button";
import { useLocation, matchPath } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Header(props) {

  const GetActiveLinkClass = (path) => {
    const { pathname } = useLocation();
    return matchPath(pathname, path) ? "active" : "";
  };
  
  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <IconText className="mx-auto" />
              </div>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <IconText />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Button
                      className={`nav-link ${GetActiveLinkClass("/")}`}
                      type="link"
                      href="/"
                    >
                      Home
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button
                      className={`nav-link ${GetActiveLinkClass("/browse-by")}`}
                      type="link"
                      href="/browse-by"
                    >
                      Browse by
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button
                      className={`nav-link ${GetActiveLinkClass("/stories")}`}
                      type="link"
                      href="/stories"
                    >
                      Stories
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button
                      className={`nav-link ${GetActiveLinkClass("/agents")}`}
                      type="link"
                      href="/agents"
                    >
                      Agents
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
