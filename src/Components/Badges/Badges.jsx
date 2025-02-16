import React from "react";
import "./Badges.css";

import img1 from "../../assets/1st.png";
import img2 from "../../assets/2nd.png";
import img3 from "../../assets/3rd.png";
import img4 from "../../assets/4th.png";
import img5 from "../../assets/5th.png";
import img6 from "../../assets/6th.png";
import img7 from "../../assets/7th.png";

const badges = [
  {
    id: 1,
    title: "Workout Complete",
    image: img1,
    completed: true,
    position: "top",
  },
  {
    id: 2,
    title: "Yoga Master",
    image: img2,
    completed: true,
    position: "top",
  },
  {
    id: 3,
    title: "Meditation Pro",
    image: img3,
    completed: true,
    position: "top",
  },
  { id: 4, title: "Share Progress", image: img4, count: 0, position: "bottom" },
  {
    id: 5,
    title: "Exercise Streak",
    image: img5,
    completed: true,
    position: "bottom",
  },
  {
    id: 6,
    title: "Character Builder",
    image: img6,
    completed: true,
    position: "bottom",
  },
  { id: 7, title: "Daily Streak", image: img7, count: 0, position: "bottom" },
];

const Badge = ({ badge }) => {
  return (
    <div className={`badge ${badge.position}`}>
      <div className="badge-content">
        <img src={badge.image} alt={badge.title} className="badge-icon" />
        {badge.count !== undefined && (
          <span className="badge-count">{badge.count}</span>
        )}
      </div>
      {badge.completed && <div className="badge-star">★</div>}
    </div>
  );
};

const Badges = () => {
  return (
    <div className="badges-container">
      <h1 className="badges-title">Earned Badges</h1>

      <div className="badges-description">
        <p>Earn all of the badges below to complete the WizFit Challenge!</p>
        <p>
          Watch and complete each workout video to unlock badges and track your
          progress.
        </p>
        <p>Keep going – you're on your way to becoming a WizFit Champion!</p>
      </div>

      <div className="badge-case">
        <h2 className="case-title">Badge Case</h2>
        <div className="badges-display">
          <div className="top-row">
            {badges
              .filter((badge) => badge.position === "top")
              .map((badge) => (
                <Badge key={badge.id} badge={badge} />
              ))}
          </div>
          <div className="bottom-row">
            {badges
              .filter((badge) => badge.position === "bottom")
              .map((badge) => (
                <Badge key={badge.id} badge={badge} />
              ))}
          </div>
          <div className="shelf"></div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
