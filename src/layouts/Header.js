import React from "react";
import "../styles/Header.css";
import header1 from "../images/header1.jpg";
import header2 from "../images/header2.jpg";
import header3 from "../images/header3.jpg";
import { Route, Switch } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <img src={header1} alt="nagłówek 1"></img>
        </Route>
        <Route path="/products">
          <img src={header2} alt="nagłówek 2"></img>
        </Route>
        <Route path="/contact">
          <img src={header3} alt="nagłówek 3"></img>
        </Route>
        <Route path="/admin">
          <img src={header1} alt="nagłówek 1"></img>
        </Route>
        <Route>
          <img src={header1} alt="nagłówek 1"></img>
        </Route>
      </Switch>
    </>
  );
};

export default Header;
