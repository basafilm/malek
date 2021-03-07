import React from "react";
import "./Header.css";
import logo from "../../Images/logo.png";
import GitHub from "../../Images/GitHub.png";
import LinkedIn from "../../Images/LinkedIn.png";
import YouTube from "../../Images/YouTube.png";

function Header() {
  return (
    <div class="header-main">
      <div className="header">
        <div className="header-text">
          <div className="nev-container">
            <div className="nev-link">
              <a
                href="https://github.com/basafilm"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="logos" src={GitHub} alt="github logo" />
              </a>
              <a
                href="https://dk.linkedin.com/in/malek-shafi-i-8b874518"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="logos" src={LinkedIn} alt="LinkedIn logo" />
              </a>
              <a
                href="https://www.youtube.com/c/BASAFilm/videos"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="logos" src={YouTube} alt="YouTubelogo" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="logo-image">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
