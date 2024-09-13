import React, { useState } from "react";
import Announce from "../Announce/Announce";
import Card from "./Card";
import "../Cars/Cars.css";
import hero from "../../assets/Hero.webp";
import Footer from "../Footer/Footer";

const Cars = () => {
  const [data, setData] = new useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  return (
    <>
      <Announce />
      <div className="containerX">
        <img src={hero} alt="" />

        <div className="search">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter A Car Name"
              className="input"
              onChange={handleSearch}
            />
            <button type="submit" className="searchicon">
              Search
            </button>
          </form>
        </div>
      </div>
      <Card />
      <Footer />
    </>
  );
};

export default Cars;
