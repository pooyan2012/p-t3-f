import React from "react";

const HomeSinglePost = (props) => {
  return (
    <div className="single-post">
      <div className="single-post-top"></div>
      <div className="single-post-bottom">
        <div className="title">{props.title}</div>
        <div className="writer">{props.authorDate}</div>
        <div className="desc">{props.desc}</div>
      </div>
    </div>
  );
};

export default HomeSinglePost;
