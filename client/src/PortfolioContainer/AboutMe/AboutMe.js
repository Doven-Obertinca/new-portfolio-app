import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animation";
import "./AboutMe.css"

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I want to participate in big and important projects and be part of a change in the future of the technology.",
    highlights: {
      bullets: [
        "Full-Stack Web Developer",
        "JavaScript",
        "ExpressJS",
        "GatsbyJS",
        "React",
        "NodeJS",
        "Bootstrap",
        "CSS",
        "HTML5",
        "MongoDB",
        "MySQL",
        "SASS"
      ],
      heading: " Some Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container" 
    id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              {/* <button className="btn primary-btn">
                {""}
                Hire Me{" "}
              </button>
              <a href="Cv Ger.pdf" download="Doven Cv Cv Ger.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
