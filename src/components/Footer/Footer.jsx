import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="cr-footer">
      <div className="cr-footer-content">
        <div className="cr-footer-section cr-about">
          <h2 className="cr-footer-title">About Us</h2>
          <p className="cr-footer-text">
            We are dedicated to providing the best car rental services in the
            industry. With a wide range of vehicles and unbeatable prices, we
            are your go-to car rental service.
          </p>
        </div>
        <div className="cr-footer-section cr-links">
          <h2 className="cr-footer-title">Quick Links</h2>
          <ul className="cr-footer-list">
            <li>
              <a href="/" className="cr-footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="cr-footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="cr-footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="cr-footer-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="cr-footer-section cr-contact">
          <h2 className="cr-footer-title">Contact Us</h2>
          <p className="cr-footer-text">
            <strong>Phone:</strong> +123 456 7890
            <br />
            <strong>Email:</strong> support@carrental.com
            <br />
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
        </div>
      </div>
      <div className="cr-footer-bottom">
        <p className="cr-footer-bottom-text">
          &copy; 2024 Car Rental Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
