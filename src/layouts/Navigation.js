import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";
const Navigation = () => {
  let nav = [
    {
      name: "start",
      path: "/",
      exact: true
    },
    {
      name: "produkty",
      path: "/products"
    },
    {
      name: "kontakt",
      path: "/contact"
    },
    {
      name: "Panel Admina",
      path: "/admin"
    }
  ];
  nav = nav.map((item, index) => (
    <li key={index}>
      <NavLink to={item.path} exact={item.exact ? true : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return <ul className="navigation">{nav}</ul>;
};

export default Navigation;
