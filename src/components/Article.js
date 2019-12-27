import React from "react";
const Article = props => {
  const styles = {
    marginTop: 30
  };
  return (
    <article style={styles}>
      <h3 style={{ textTransform: "uppercase" }}>{props.title}</h3>
      <p>{props.content}</p>
    </article>
  );
};

export default Article;
