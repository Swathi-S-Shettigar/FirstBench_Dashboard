// components/ImprovementCard.jsx
import React from "react";
import "./ImprovementCard.css";

const ImprovementCard = () => {
  const subjects = [
    "Geography",
    "Politics",
    "Current Affairs",
    "Mathematics",
    "Social Studies",
    "Economics",
  ];

  return (
    <div className="improvement-card">
      <h3>Improvements</h3>
      <p>Subject Understanding</p>
      <div className="subjects">
        {subjects.map((subject, index) => (
          <span key={index} className="subject">
            {subject}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImprovementCard;
