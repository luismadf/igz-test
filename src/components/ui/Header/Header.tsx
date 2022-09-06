import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="screen__wrapper">
        <div className="logo">
          <Link className="header__logo--link" to="/">
            <h1>
              INTELYGENZ <span>Test</span>
            </h1>
          </Link>
        </div>
        <a
          href="https://github.com/luismadf/igz-test"
          target="_blank"
          className="header__github--link"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
