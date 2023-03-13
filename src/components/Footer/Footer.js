import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best deal
        </p>
        <p className="footer-subscription-text">
          You can Unsubscribe at any time
        </p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to = '/sign-up'> how it work</Link>
                <Link to = '/'> Testimonial </Link>
                <Link to = '/'> Careers</Link>
                <Link to = '/'> Investors</Link>
                <Link to = '/'> Terms of Services</Link>
            </div>
            <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
        <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to='/' className="social-logo">
                    TRVL <i className="fab fa-typo3" />
                </Link>
            </div>
            <small className="website-rights"> TRVL © 2023</small>
            <div className="social-icons">
                <Link
                className="social-icon-link facebook"
                to= "/"
                target='_blank'
                aria-label="facebook">
                    <i className="fab fa-facebook-f" />
                </Link>
                <Link
                className="social-icon-link instagram"
                to= "/"
                target='_blank'
                aria-label="instagram">
                    <i className="fab fa-instagram" />
                </Link>
                <Link
                className="social-icon-link youtube"
                to= "/"
                target='_blank'
                aria-label="Youtube">
                    <i className="fab fa-youtube" />
                </Link>
                <Link
                className="social-icon-link twitter"
                to= "/"
                target='_blank'
                aria-label="twitter">
                    <i className="fab fa-twitter" />
                </Link>
                <Link
                className="social-icon-link linkedin"
                to= "/"
                target='_blank'
                aria-label="linkedin">
                    <i className="fab fa-linkedin" />
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
