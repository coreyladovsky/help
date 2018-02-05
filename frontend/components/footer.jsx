import React from "react";
import { Link } from "react-router-dom";

export const Footer = props => {
  return (
    <div className="footer">
      <div className="all-landing-conatiner">
        <div className="all-landing-ul">
          <ul>
            <li className="landing-ul-header">About</li>
            <li className="info-landing-ul">
              <a href="https://github.com/coreyladovsky/help" target="_blank">
                {" "}
                About Help
              </a>
              <a href="http://www.coreyladovsky.com" target="_blank">
                {" "}
                Corey Ladovsky{" "}
              </a>
            </li>
          </ul>
          <ul>
            <li className="landing-ul-header">Connect</li>
            <li className="info-landing-ul">
              <a href="https://github.com/coreyladovsky" target="_blank">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/corey-ladovsky/"
                target="_blank"
              >
                {" "}
                LinkedIn{" "}
              </a>
              <a href="https://angel.co/corey-ladovsky" target="_blank">
                {" "}
                Angel{" "}
              </a>
            </li>
          </ul>

          <ul>
            <li className="landing-ul-header">Other Projects</li>
            <li className="info-landing-ul">
              <a
                href="http://www.coreyladovsky.com/Maze-Spinner/"
                target="_blank"
              >
                {" "}
                Maze Spinner
              </a>
              <a
                href="http://www.coreyladovsky.com/Master-Of-The-Domain/"
                target="_blank"
              >
                {" "}
                Master Of The Domain{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-pic" />
    </div>
  );
};
