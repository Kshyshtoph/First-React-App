import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsList.css";
const products = ["car", "bike", "motorcycle"];
const ProductList = () => {
  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));
  return (
    <div className="products">
      Lista Produktów
      <ul className="products">{list}</ul>
    </div>
  );
};

export default ProductList;
