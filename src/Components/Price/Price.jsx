import React from "react";
import { Gift } from "lucide-react";
import "./Price.css";

const prizes = [
  { id: 1, amount: 30, won: true, icon: "🏀", label: "Keychain" },
  { id: 2, amount: 60, won: false, icon: "🏀", label: "Basketball" },
  { id: 3, amount: 90, won: false, icon: "📦", label: "Mystery Box" },
  { id: 4, amount: 125, won: false, icon: "🎽", label: "Jersey" },
  { id: 5, amount: 250, won: false, icon: "🧢", label: "Cap" },
  { id: 6, amount: 375, won: false, icon: "👕", label: "Hoodie" },
  { id: 7, amount: 500, won: false, icon: "🏀", label: "Premium Ball" },
];

const Prize = ({ currentAmount = 35 }) => {
  const maxAmount = Math.max(...prizes.map((prize) => prize.amount));
  const progress = (currentAmount / maxAmount) * 100;

  return (
    <div className="prize-container">
      <h2 className="prize-title">Prizes Won by ga.</h2>

      <div className="prizes-grid">
        {prizes.map((prize) => (
          <div key={prize.id} className="prize-item">
            <div
              className={`prize-icon ${
                currentAmount >= prize.amount ? "active" : ""
              }`}
            >
              {prize.id === 1 && currentAmount >= prize.amount ? (
                <div className="won-badge">YOU WON!</div>
              ) : (
                <div className="next-badge">NEXT PRIZE</div>
              )}
              <span className="prize-emoji">{prize.icon}</span>
            </div>
            <p className="prize-amount">
              Reach ${prize.amount} to get the prize
            </p>
          </div>
        ))}
      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
          <div className="progress-marker" style={{ left: `${progress}%` }}>
            <Gift className="gift-icon" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;
