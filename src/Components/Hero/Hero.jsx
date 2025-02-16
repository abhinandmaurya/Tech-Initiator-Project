import React from "react";
import { User } from "lucide-react";
import "./Hero.css";
import logo from "../../assets/avatar.png";
import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <div>
      <img src={banner} alt="banner" className="banner" />
      <div className="hero-container">
        <div className="left-section">
          <div className="profile-section">
            <div className="avatar-container">
              <img src={logo} alt="user" className="user" />
            </div>
            <div className="share-info">
              <p className="share-text">You have shared</p>
              <div className="star-container">
                <span className="star">⭐</span>
              </div>
              <p className="time-text">time(s)</p>
            </div>
            <div className="challenge-info">
              <p className="challenge-text">
                In order to complete the challenge and win the champion
                medallion, you need to share with at least 3 contacts and earn
                all of the badges.
              </p>
            </div>
          </div>
        </div>

        <div className="middle-section">
          <h1>qa</h1>
          <div className="teacher-info">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop"
              alt="Basketball"
              className="teacher-avatar"
            />
            <div className="teacher-details">
              <h2>InMotion Elementry</h2>
              <p>teacher two (Grade Multi)</p>
            </div>
          </div>

          <div className="event-description">
            <p>
              The World Famous Harlem Wizards are joining my school on
              02-03-2024 to help us raise funds with their new WizFit Challenge
              fundraiser and kids experience. During these next two-weeks, I
              will watch and participate in an exclusive series of six
              interactive video challenges led by Harlem Wizard stars Swoop and
              Broadway. I will be requesting donations for participating in and
              completing the WizFit challenge. I will get fit, learn tricks,
              have fun, earn prizes, and be coached on character by the Wizards.
            </p>

            <div className="goal-section">
              <p className="goal-text">Our goal is to raise $50000.</p>
              <p className="purpose-text">To build a new basketball Court</p>
              <p className="additional-text">
                We're excited to see our school come together for this
                fundraising program. Additional statement
              </p>
            </div>
          </div>
        </div>

        <div className="right-section">
          <button className="register-button">Register A Student</button>

          <div className="app-download">
            <h2>DOWNLOAD THE APP</h2>
            <div className="store-buttons">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="store-badge"
              />
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="store-badge"
              />
            </div>
          </div>

          <div className="progress-section">
            <h2>We are just getting started.</h2>
            <div className="basketball-court">
              <div className="backboard"></div>
              <div className="ball"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
