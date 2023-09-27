// NewsletterSignup.js

import React, { useState } from "react";
import "./NewsletterSignup.css"; // Import your CSS styles for the NewsletterSignup

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the email (e.g., send it to a server or store it)
    // You can also display a confirmation message to the user
    console.log(`Email submitted: ${email}`);
  };

  return (
    <section className="newsletter-signup">
      <h2 className="section-title">Newsletter Signup</h2>
      <p className="section-description">
        Subscribe to our gaming newsletter for updates and offers.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsletterSignup;
