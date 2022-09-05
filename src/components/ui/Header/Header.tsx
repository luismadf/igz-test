import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="screen__wrapper">
        <div className="logo">
          <h1>
            INTELYGENZ <span>Test</span>
          </h1>
        </div>
        <i className="fa-brands fa-github"></i>
      </div>
    </header>
  );
};

export default Header;
