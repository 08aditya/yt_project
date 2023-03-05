import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handelClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showbutton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showbutton();
  }, []);

  window.addEventListener("resize", showbutton);

  return (
    <div>
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              TRVL <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={handelClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/product"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  sign up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle="btn--outline"> SIGN UP</Button>}
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
