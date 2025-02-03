import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">ShenCarCar</div>
          <p className="footer-description">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h2 className="footer-title">About</h2>
            <ul className="footer-list">
              <li>
                <button>How it works</button>
              </li>
              <li>
                <button>Featured</button>
              </li>
              <li>
                <button>Partnership</button>
              </li>
              <li>
                <button>Business Relation</button>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">Community</h2>
            <ul className="footer-list">
              <li>
                <button>Events</button>
              </li>
              <li>
                <button>Blog</button>
              </li>
              <li>
                <button>Podcast</button>
              </li>
              <li>
                <button>Invite a friend</button>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">Socials</h2>
            <ul className="footer-list">
              <li>
                <button>Discord</button>
              </li>
              <li>
                <button>Instagram</button>
              </li>
              <li>
                <button>Twitter</button>
              </li>
              <li>
                <button>Facebook</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">©2025 ShenCarCar. All rights reserved</p>
        <div className="footer-policy">
          <button className="policy-link">Privacy & Policy</button>
          <button className="policy-link">Terms & Condition</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;