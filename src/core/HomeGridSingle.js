import React from "react";

const HomeGridSingle = (props) => {
  return (
    <div
      id={`${props.divId}`}
      className={`${props.divStyleName} box-shadow`}
    >
      <div className={`${props.catStyleName}`}>{props.cat}</div>
      <div className={`${props.titleStyleName}`}>{props.title}</div>
      <div className="info-div">
        <div className="info-subdiv">
          <img
            src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/6002984d9043d0a0c5bdb150_rate-icon.svg"
            loading="lazy"
            alt=""
            className="image-2"
          />
          <div className="info-div-text">(۲۳) ۴/۲۷ از ۵</div>
        </div>
        <div className="info-subdiv">
          <img
            src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/6002984cb4348137f2319d6a_like-icon.svg"
            loading="lazy"
            alt=""
            className="image-3"
          />
          <div className="info-div-text">۲۴۳</div>
        </div>
        <div className="info-subdiv">
          <img
            src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/6002984d3f13762b38a4c17f_comment-icon.svg"
            loading="lazy"
            alt=""
            className="image-4"
          />
          <div className="info-div-text">۷۶</div>
        </div>
      </div>
    </div>
  );
};

export default HomeGridSingle;
