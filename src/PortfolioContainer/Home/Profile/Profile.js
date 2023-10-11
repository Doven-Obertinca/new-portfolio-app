import React, { useState, useEffect } from "react";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Motivated Dev",
    "Full Stack Developer",
    "MERN Stack Dev",
    "React Dev",
    "Gatsby Dev",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000); // Adjust the timing as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/Doven-Obertinca" target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/doven-obertinca/"
                target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Doven</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>{roles[roleIndex]}</h1>
              <span className="profile-role-tagline">
                We are the ones you need until the house is really stable, but
                in the web world!
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              Contact Me
            </button>
            <a href="Cv Ger.pdf" download="">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
