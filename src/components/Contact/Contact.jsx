import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <header className="cr-header">
        <h1 className="cr-title">Contact Us</h1>
        <p className="cr-subtitle">
          We are here to help you with your car rental needs!
        </p>
      </header>

      <main className="cr-main">
        <section className="cr-contact-info">
          <h2 className="cr-section-title">Our Contact Information</h2>
          <p className="cr-info-item">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="cr-info-item">
            <strong>Email:</strong> info@carrental.com
          </p>
          <p className="cr-info-item">
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
        </section>

        <section className="cr-contact-form">
          <h2 className="cr-section-title">Send Us a Message</h2>
          <form className="cr-form" action="submit_form.php" method="POST">
            <label className="cr-label" htmlFor="name">
              Name:
            </label>
            <input
              className="cr-input"
              type="text"
              id="name"
              name="name"
              required
            />

            <label className="cr-label" htmlFor="email">
              Email:
            </label>
            <input
              className="cr-input"
              type="email"
              id="email"
              name="email"
              required
            />

            <label className="cr-label" htmlFor="message">
              Message:
            </label>
            <textarea
              className="cr-textarea"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>

            <button className="cr-button" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="cr-footer">
        <p className="cr-footer-text">
          &copy; 2024 Car Rental Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
