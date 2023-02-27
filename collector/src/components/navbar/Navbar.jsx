import React from "react";
import { NavLink } from "react-router-dom";

import "src/static/navbar.css";
import { GB, PL } from "country-flag-icons/react/3x2";

import {
  getDisplayText,
  getDisplayTextFromChoices,
  dictionary as dict,
} from "src/utils/languageUtil";

const Navbar = () => {
  const language = "pl";

  const changeLanguage = (language) => {
    //TODO
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <NavLink to="/">{getDisplayText(language, dict.navbar.home)}</NavLink>
          <NavLink to="/plates">
            {getDisplayText(language, dict.navbar.plates)}
          </NavLink>
          <NavLink to="/gallery">
            {getDisplayText(language, dict.navbar.gallery)}
          </NavLink>
          <NavLink to="/map">
            {getDisplayText(language, dict.navbar.map)}
          </NavLink>
          <NavLink to="/stats">
            {getDisplayText(language, dict.navbar.statistics)}
          </NavLink>

          <PL
            style={{ marginLeft: "auto" }}
            title="pl"
            className={
              "flag " + getDisplayTextFromChoices(language, "", "selected")
            }
            onClick={() => changeLanguage("pl")}
          />
          <GB
            style={{ marginRight: "20px" }}
            title="en"
            className={
              "flag " + getDisplayTextFromChoices(language, "selected", "")
            }
            onClick={() => changeLanguage("en")}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
