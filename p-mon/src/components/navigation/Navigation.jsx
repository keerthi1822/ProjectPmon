import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../searchComponent/Search";

import "./navigation.css";

const Navigation = () => {
  return (
    <div className="Nav-group">
      <NavLink to="/page/0" className="home-Logo">
        {" "}
        H!!Om!!E
      </NavLink>

      <Search />
    </div>
  );
};

export default Navigation;
