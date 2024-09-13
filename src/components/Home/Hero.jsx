import React from "react";
import "../Home/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>Explore Bhopal With Us</h1>
        </div>
        <div className="searchbox">
          <input
            type="text"
            value="Bhopal, Madhya Pradesh, India"
            className="cityname"
          />
          <input type="date" />
          <input type="date" />
          <button className="btn">Search</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
