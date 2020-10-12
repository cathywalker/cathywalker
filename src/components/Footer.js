import React from "react";
import "./Footer.css";
import Logo from "./images/logo.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          If you would like to chat further about my work, request a copy of my
          CV or want to hire me for work you can email me at{" "}
          <a href="mailto:cathylouisewalker@gmail.com">
            cathylouisewalker@gmail.com
          </a>
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items"></div>
          <div class="footer-link-items"></div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items"></div>
          <div class="footer-link-items"></div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src={Logo} width="200px" alt="Cathy Walker Logo" />
            </Link>
          </div>
          <small class="website-rights">© 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>

            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
