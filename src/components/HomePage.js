import React from "react";
import Article from "./Article";
const articles = [
  {
    id: 1,
    title: "Lorem",
    content:
      "lorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteur"
  },
  {
    id: 2,
    title: "ipsum",
    content:
      "lorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteur"
  },
  {
    id: 3,
    title: "dolor",
    content:
      "lorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor sit amet consecteur"
  }
];
const HomePage = () => {
  const show = articles.map(article => (
    <Article key={article.id} {...article}></Article>
  ));
  return <div className="home">{show}</div>;
};

export default HomePage;
