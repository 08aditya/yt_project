import React from "react";
import Button from "../button/Button";
import "./hero_sectiuon.css";
import "../../App.css";
import video from "../../assets/videos/video-1.mp4"

// test code
function HeroSection() {
  return (
    <div className="hero-container">
      <video src = {video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS </h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle " />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
