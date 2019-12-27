import "../styles/Footer.css";
import React from "react";
import { Route } from "react-router-dom";
const Footer = ({ match }) => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/:page"
        render={props => (
          <p>
            jesteś na stronie<span>{props.match.params.page}</span>
          </p>
        )}
      />
      <Route
        path="/"
        exact
        render={props => (
          <p>
            jesteś na stronie<span>głównej</span>
          </p>
        )}
      />
      <Route
        path="/:page/:productId"
        render={props => (
          <p>
            jesteś na podstronie<span>{props.match.params.productId}</span>
          </p>
        )}
      />
    </div>
  );
};

export default Footer;
