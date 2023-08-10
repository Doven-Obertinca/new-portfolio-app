import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../images/mailz.jpeg";
import load1 from "../../../images/load2.gif";
import ScreenHeading from "../../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../../utilities/ScrollService";
import Animation from "../../../utilities/Animation";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const typewriterText = ["Get in touch!!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypewriterIndex(
        (prevIndex) => (prevIndex + 1) % typewriterText.length
      );
    }, 1000); // Adjust the timing as needed

    return () => clearInterval(interval);
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessge = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
      }
    } catch (error) {
      console.log(error);
    }
    // e.preventDefault();
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"lets keep in touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">{typewriterText[typewriterIndex]}</h2>
          <a href="https://github.com/Doven-Obertinca" target="_blank">
            <i className="fa fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/doven-obertinca/"
            target="_blank">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessge} value={message} />
            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not found" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
