import React from "react";

const SubGridSmallPost = (props) => {
  return (
    <div className="inside-div">
      <div className="hero-text-div">
        <div className="title-small">{props.title}</div>
        <div className="hero-writer-text">{props.authorDate}</div>
      </div>
      <div className="hero-pic-div"></div>
    </div>
  );
};

export default SubGridSmallPost;
