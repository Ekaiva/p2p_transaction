import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link style={{textDecoration:"none"}} to="/">
          <div className="logo-text">
            <span>P2P</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
