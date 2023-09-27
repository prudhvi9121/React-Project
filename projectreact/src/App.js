import React from "react";
import "./App.css"; // Import your CSS styles
import ImageGallery from "./ImageGallery";
import NewsletterSignup from "./NewsletterSignup";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="logo"><img src="/logo.png" alt="LOGO" style={{width:"300px",height:"50px"}} /></div>
        <button className="signin-button">Sign In</button>
      </header>

      <main className="main">
      <div className="sub-section-grid">
        <section className="sub-section">
          <div className="sub-section-content">
            <div className="image-left">
              <img src="/game6.jpg" alt="Game 1" />
            </div>
            <div className="text-right">
              <h2>CyberPunk: 2077</h2>
              <button className="play-button">Play Now</button>
            </div>
          </div>
        </section>

        <section className="sub-section">
          <div className="sub-section-content">
            <div className="image-left">
              <img src="/game5.jpg" alt="Game 2" />
            </div>
            <div className="text-right">
              <h2>PUBG: Battlegrounds</h2>
              <button className="play-button">Play Now</button>
            </div>
          </div>
        </section>

        <section className="sub-section">
          <div className="sub-section-content">
            <div className="image-left">
              <img src="/game3.jpg" alt="Game 3" />
            </div>
            <div className="text-right">
              <h2>Sky: Children of the Light</h2>
              <button className="play-button">Play Now</button>
            </div>
          </div>
        </section>

        <section className="sub-section">
          <div className="sub-section-content">
            <div className="image-left">
              <img src="/game4.jpg" alt="Game 4" />
            </div>
            <div className="text-right">
              <h2>Shadow Fight</h2>
              <button className="play-button">Play Now</button>
            </div>
          </div>
        </section>
      </div>
      </main>

<ImageGallery />

      <section className="news-section">
      <h2 className="section-title">News and Updates</h2>

      <div className="news-container">
        {/* Individual News Cards */}
        <div className="news-card">
          <img src="/news1.jpg" alt="News 1" className="news-image" />
          <div className="news-content">
            <h3 className="news-title">Exciting Game Release Announced</h3>
            <p className="news-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="read-more-link">
              Read More
            </a>
          </div>
        </div>

        <div className="news-card">
          <img src="/news2.jpg" alt="News 2" className="news-image" />
          <div className="news-content">
            <h3 className="news-title">Esports Championship Finals</h3>
            <p className="news-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="read-more-link">
              Read More
            </a>
          </div>
        </div>

        <div className="news-card">
          <img src="/news3.jpg" alt="News 3" className="news-image" />
          <div className="news-content">
            <h3 className="news-title">Exclusive Game Teaser Trailer</h3>
            <p className="news-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="read-more-link">
              Read More
            </a>
          </div>
        </div>
        {/* End of News Cards */}
      </div>
    </section>
    <section className="faq-section">
      <h2 className="section-title1">FAQs</h2>

      <div className="faq-list">
        <div className="faq-item">
          <h3 className="faq-question">1. What is the purpose of this gaming website?</h3>
          <p className="faq-answer">
            This gaming website is dedicated to providing gaming enthusiasts with the latest news, updates, and reviews of popular video games.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">2. How can I contact the support team?</h3>
          <p className="faq-answer">
            You can contact our support team by visiting the "Contact Us" page or sending an email to support@example.com.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">3. Do you offer any gaming tips and strategies?</h3>
          <p className="faq-answer">
            Yes, we provide gaming tips and strategies for various games in our "Tips & Tricks" section.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">4. Is there a subscription fee for using this website?</h3>
          <p className="faq-answer">
            No, our website is completely free to use. There are no subscription fees or hidden charges.
          </p>
        </div>
      </div>
    </section>

<NewsletterSignup />

<footer className="footer">
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Gaming Zone. All Rights Reserved.
      </div>
    </footer>
    </div>
  );
};

export default App;
