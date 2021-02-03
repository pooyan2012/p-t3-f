import React from "react";
import HomeLikeCmRate from "./HomeLikeCmRate";

const HomeGridSingle = (props) => {
  return (
    <div
      id={`${props.divId}`}
      className={`${props.divStyleName} box-shadow`}
      style={{
        backgroundImage: `url(${props.gridImage})`,
      }}
    >
      <div className={`${props.catStyleName}`}>{props.cat}</div>
      <div className={`${props.titleStyleName}`}>{props.title}</div>
      <div className="info-div">
        <HomeLikeCmRate />
      </div>
    </div>
  );
};

export default HomeGridSingle;
