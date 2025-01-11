// App.jsx
import React from "react";
import Header from "./components/Header";
import ResultCard from "./components/ResultCard";
import ImprovementCard from "./components/ImprovementCard";
import StatsChart from "./components/StatsChart";
import Suggestions from "./components/Suggestions";
import TimeTaken from "./components/TimeTaken";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="dashboard-grid">
          <ResultCard />
          <StatsChart />
          <ImprovementCard />
          <Suggestions />
          <TimeTaken />
        </div>
      </main>
    </div>
  );
};

export default App;
