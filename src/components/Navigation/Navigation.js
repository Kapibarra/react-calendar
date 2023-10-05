// Navigation.js
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/results">Результаты</Link>
        </li>
        <li>
          <Link to="/calendar">Календарь</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
