// components/ResultCard.jsx
import React from "react";
import "./ResultCard.css";

const ResultCard = () => {
  return (
    <div className="result-card">
      <h2>Your Result!</h2>
      <p>All your insights & details in one place</p>
      <div className="result">
        <p>
          <strong>136 / 240</strong>
          <span>76% Accuracy</span>
        </p>
        <div className="top-score">
          <strong>Top Score</strong>
          <p>230 / 240</p>
          <span>92% Accuracy</span>
        </div>
        <button className="practice-btn">Practice More</button>
      </div>
    </div>
  );
};

export default ResultCard;
