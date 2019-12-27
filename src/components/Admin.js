import React from "react";
import { Route, Redirect } from "react-router-dom";
const permition = false;
const Admin = () => {
  return (
    <>
      <Route
        render={() =>
          permition ? <h3>Panel admina, witaj</h3> : <Redirect to={"/login"} />
        }
      ></Route>
    </>
  );
};

export default Admin;
