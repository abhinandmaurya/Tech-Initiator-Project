import React, { useState } from "react";
import { Crown, Video, Share, Users } from "lucide-react";
import "./Leaderboards.css";

const users = [
  {
    id: 1,
    name: "InMotion Elementary teacher",
    grade: "Grade KG",
    school: "InMotion Elementary",
    fundsRaised: 2500,
    registrations: 150,
    videosWatched: 89,
    shares: 234,
  },
  {
    id: 2,
    name: "InMotion Elementary teacher two",
    grade: "Grade Multi",
    school: "InMotion Elementary",
    fundsRaised: 2100,
    registrations: 130,
    videosWatched: 76,
    shares: 198,
  },
  {
    id: 3,
    name: "InMotion Elementary teacher three",
    grade: "Grade 1",
    school: "InMotion Elementary",
    fundsRaised: 1800,
    registrations: 110,
    videosWatched: 65,
    shares: 167,
  },
  {
    id: 4,
    name: "InMotion Elementary teacher four",
    grade: "Grade 2",
    school: "InMotion Elementary",
    fundsRaised: 1500,
    registrations: 90,
    videosWatched: 54,
    shares: 145,
  },
];

const Leaderboard = () => {
  const [activeCategory, setActiveCategory] = useState("funds");

  const getSortedUsers = () => {
    switch (activeCategory) {
      case "funds":
        return [...users].sort((a, b) => b.fundsRaised - a.fundsRaised);
      case "registration":
        return [...users].sort((a, b) => b.registrations - a.registrations);
      case "videos":
        return [...users].sort((a, b) => b.videosWatched - a.videosWatched);
      case "shares":
        return [...users].sort((a, b) => b.shares - a.shares);
      default:
        return users;
    }
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-tabs">
        <button
          className={`tab ${activeCategory === "funds" ? "active" : ""}`}
          onClick={() => setActiveCategory("funds")}
        >
          Most Funds Raised
        </button>
        <button
          className={`tab ${activeCategory === "registration" ? "active" : ""}`}
          onClick={() => setActiveCategory("registration")}
        >
          Top Registration
        </button>
        <button
          className={`tab ${activeCategory === "videos" ? "active" : ""}`}
          onClick={() => setActiveCategory("videos")}
        >
          Most Video Watched
        </button>
        <button
          className={`tab ${activeCategory === "shares" ? "active" : ""}`}
          onClick={() => setActiveCategory("shares")}
        >
          Most Number Of Shares
        </button>
      </div>

      <div className="leaderboard-content">
        <div className="leaderboard-header-row">
          <span className="rank-header">Rank</span>
          <span className="class-header">Class</span>
        </div>

        {getSortedUsers().map((user, index) => (
          <div key={user.id} className="leaderboard-row">
            <div className="rank-column">
              {index === 0 ? (
                <Crown className="crown-icon" />
              ) : (
                <span className="rank-number">{index + 1}</span>
              )}
            </div>
            <div className="class-column">
              <div className="user-name">{user.name}</div>
              <div className="user-grade">{user.grade}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
