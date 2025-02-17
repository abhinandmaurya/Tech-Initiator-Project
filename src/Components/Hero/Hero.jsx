import React from "react";
import "./Hero.css";
import pr from "../../assets/pr.jpg";
import appimage from "../../assets/appImage.png";
import google from "../../assets/google.png";
import store from "../../assets/store.png";
import basket from "../../assets/0_V5UaT0o.gif";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        {/* Teacher profile */}
        <div className="teacher-profile">
          <div className="profile-icon">
            <img src={pr} alt="School logo" />
          </div>
          <div className="profile-info">
            <h3 className="school-title">InMotion Elementry</h3>
            <p className="subtitle">teacher two (Grade Multi)</p>
          </div>
        </div>

        {/* Fundraiser information */}
        <div className="fundraiser-info">
          <p>
            The World Famous Harlem Wizards are joining my school on 02-03-2024
            to help us raise funds with their new WizFit Challenge fundraiser
            and kids experience. During these next two-weeks, I will watch and
            participate in an exclusive series of six interactive video
            challenges led by Harlem Wizard stars Swoop and Broadway. I will be
            requesting donations for participating in and completing the WizFit
            challenge. I will get fit, learn tricks, have fun, earn prizes, and
            be coached on character by the Wizards.
          </p>

          <p className="goal-statement">Our goal is to raise $50000.</p>

          <p>To build a new basketball Court</p>

          <p>
            We're excited to see our school come together for this fundraising
            program. Additional statement
          </p>
        </div>

        {/* Event timeline */}
        <div className="event-timeline-section">
          <h3 className="timeline-title">Event Timeline</h3>
          <div className="timeline-container">
            <div className="timeline-events">
              <div className="event">
                <div className="event-icon kickoff-icon"></div>
                <div className="event-name">Kick Off</div>
                <div className="event-date">30 Jun</div>
              </div>
              <div className="event">
                <div className="event-icon giveaway-icon"></div>
                <div className="event-name">Platinum Ball Giveaway</div>
                <div className="event-date">12 Aug</div>
              </div>
              <div className="event">
                <div className="event-icon graduation-icon"></div>
                <div className="event-name">Graduation</div>
                <div className="event-date">03 Sep</div>
              </div>
              <div className="event">
                <div className="event-icon donation-icon"></div>
                <div className="event-name">Donations Close</div>
                <div className="event-date">12 Mar</div>
              </div>
            </div>
            <div className="timeline-progress">
              <div className="progress-icon"></div>
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>

        {/* School info and conclusion */}
        <div className="concluding-info">
          <div className="school-logo">
            <img src={pr} alt="School logo" />
          </div>
          <div className="school-info">
            <h2>InMotion Elementry</h2>
            <p>
              We will then conclude this event on 05-28-2024 with a Graduation
              Celebration where every student will participate and win free
              prizes.
            </p>

            <p className="fundraising-message">
              We are raising money to purchase new playground and outdoor
              sensory equipment. Our goal is to raise $10,000. Students can
              request donations from friends and family to support them
              participating in the WizFit Challenge. We're excited to see our
              school come together for this fundraising program.
            </p>

            <div className="fundraising-stats">
              <div className="amount-raised">
                <h3>
                  $2
                  <span className="small-text">
                    raised of $50,000 School goal
                  </span>
                </h3>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar-fill"
                    style={{ width: "0.0%" }}
                  ></div>
                  <div className="percentage">0.0%</div>
                </div>
                <div className="progress-stats">
                  <span>2 donors</span>
                  <span>25 days left</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        {/* App download section */}
        <button className="hero-btn">Register A Student</button>
        <div className="app-showcase">
          <div className="app-heading">
            <h2>DOWNLOAD THE APP</h2>
          </div>
          <div className="app-visual">
            <img
              src={appimage}
              alt="Mobile app screens"
              className="app-screens"
            />
          </div>
          <div className="app-download-buttons">
            <a href="#" className="play-store-button">
              <img src={google} alt="Get it on Google Play" />
            </a>
            <a href="#" className="app-store-button">
              <img src={store} alt="Download on the App Store" />
            </a>
          </div>
        </div>

        {/* Donation status */}
        <div className="donation-status">
          <div className="basketball-graphic">
            <img
              src={basket}
              alt="Basketball animation"
              className="hoop-image"
            />
          </div>
          <div className="donation-progress">
            <h3>
              $0 <span className="small-text">raised of $250 goal</span>
            </h3>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: "0.0%" }}
              ></div>
              <div className="percentage">0.0%</div>
            </div>
            <div className="progress-stats">
              <span>0 Donors</span>
              <span>25 days left</span>
            </div>
          </div>
          <button className="donate-button">
            <span className="heart-icon">♥</span> Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
