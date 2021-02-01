import React from "react";

const HomeSinglePost = (props) => {
  /*What if the image path is a web URL instead of a local path? Something like https://images.com/myimage.png – Aminu Kano Aug 2 '18 at 4:31
    Ok I understand, when using web-based URL. I should just write url(https://images.com/myimage.png) – Aminu Kano Aug 2 '18 at 4:35*/
  return (
    <div className="single-post">
      <div
        className="single-post-top"
        style={{
          backgroundImage: `url(${props.singlePostBgImage})`
        }}
      ></div>
      <div className="single-post-bottom">
        <div className="title">{props.title}</div>
        <div className="writer">{props.authorDate}</div>
        <div className="desc">{props.desc}</div>
      </div>
    </div>
  );
};

export default HomeSinglePost;
