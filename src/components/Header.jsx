import React from "react";
import { FaBars } from "react-icons/fa";

function Header({ togglePin }) {
  return (
    <header>
      <div className="header-container">
        <FaBars
          className="hamburger-icon"
          onClick={togglePin}
          size={38}
          style={{ cursor: "pointer", paddingLeft: "17px" }}
        />
        <h1>keepPortfolio.</h1>
      </div>
    </header>
  );
}

export default Header;