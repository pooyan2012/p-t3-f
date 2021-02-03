import React from "react";

const SubGridBigPost = (props) => {
  return (
    <div
      className="top-div"
      style={{
        backgroundImage: `url(${props.subGridBigImage})`,
      }}
    >-
      <div className="top-big-div-cat second-row-big-div-cat">
        {props.subBigDivCat}
      </div>
      <div className="top-big-div-font second-row-big-div-font">
        {props.subBigDivTitle}
      </div>
    </div>
  );
};

export default SubGridBigPost;
