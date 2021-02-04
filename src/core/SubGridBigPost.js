import React from "react";
import HomeLikeCmRate from "./HomeLikeCmRate";

const SubGridBigPost = (props) => {
  return (
    <div
      className="top-div"
      style={{
        backgroundImage: `url(${props.subGridBigImage})`,
      }}
    >
      <div className="top-big-div-cat second-row-big-div-cat">
        {props.subBigDivCat}
      </div>
      <div className="top-big-div-font second-row-big-div-font">
        {props.subBigDivTitle}
      </div>
      <div className="info-div">
        <HomeLikeCmRate />
      </div>
    </div>
  );
};

export default SubGridBigPost;
