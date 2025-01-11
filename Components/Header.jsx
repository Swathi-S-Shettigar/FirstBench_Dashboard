// components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Firstbench</div>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>FirstGuru</li>
          <li>TownHall</li>
          <li>AI Evaluation</li>
          <li>Performance</li>
          <li>Mock Test</li>
        </ul>
      </nav>
      <div className="profile">P</div>
    </header>
  );
};

export default Header;
