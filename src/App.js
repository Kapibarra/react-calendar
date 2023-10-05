// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ResultsPage from "./components/Results/Results";
import CalendarPage from "./components/Calendar/Calendar";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
