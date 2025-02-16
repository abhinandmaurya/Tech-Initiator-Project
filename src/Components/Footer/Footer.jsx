import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../../assets/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="Harlem Wizards" className="footer-logo" />
          <p className="footer-text">
            WizFit Challenge is an initiative by The World Famous Harlem Wizards
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/privacy">Privacy policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Need Help</h3>
          <p>
            <MdEmail className="icon" />
            support@harlemwizardsinabox.com
          </p>
          <p>
            <MdLocationOn className="icon" />
            Harlem Wizards Entertainment Basketball, 330 Fairfield Rd,
            Fairfield, NJ 07004
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2021 Harlem Wizards</p>
        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaTiktok />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
