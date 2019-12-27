import React from "react";
import HomePage from "../components/HomePage";
import Contact from "../components/Contact";
import Admin from "../components/Admin";
import Login from "../components/Login";
import Products from "../components/Products";
import ErrorPage from "../components/ErrorPage";
import { Route, Switch } from "react-router-dom";
import ProductList from "../components/ProductList";
const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/admin" component={Admin}></Route>
      <Route path="/products" component={ProductList}></Route>
      <Route path="/product/:name" component={Products}></Route>
      <Route path="/login" component={Login}></Route>
      <Route component={ErrorPage}></Route>
    </Switch>
  );
};

export default Page;
