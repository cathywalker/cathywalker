import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <Link to="/">
              <img
                id="logo"
                src="images/logo.png"
                height="80px"
                alt="Cathy Walker Logo"
              />
            </Link>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/webdeveloper"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Web Developer
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/podcasts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Podcast Producer
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
