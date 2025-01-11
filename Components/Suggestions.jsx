// components/Suggestions.jsx
import React from "react";
import "./Suggestions.css";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <h3>Suggestions</h3>
      <p>Improve your time for:</p>
      <ul>
        <li>Easy: 40 seconds</li>
        <li>Medium: 1.5 minutes</li>
        <li>Hard: 3 minutes</li>
      </ul>
    </div>
  );
};

export default Suggestions;
