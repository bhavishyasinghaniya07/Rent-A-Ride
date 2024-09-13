import React from "react";
import "../Navbar/Navbar.css";
import logoorg from "../../assets/logoorg.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logoorg} alt="" />

      <ul className="routes">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/cars">Cars</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
