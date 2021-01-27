import React from "react";

const NavCats = () => {
  return (
    <div className="nav-div-categories">
      <div className="nav-cat-div">
        <div className="nav-cat-text">کامپیوتر</div>
        <img
          src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/6002938791c6d6156a4a5c99_cat-dropdown-icon.svg"
          loading="lazy"
          alt=""
          className="nav-cat-dropdown-icon"
        />
      </div>
      <div className="nav-cat-div">
        <div className="nav-cat-text">اخبار</div>
      </div>
      <div className="nav-cat-div">
        <div className="nav-cat-text">کسب و کار</div>
      </div>
      <div className="nav-cat-div">
        <div className="nav-cat-text">ماشین</div>
      </div>
      <div className="nav-cat-div">
        <div className="nav-cat-text">بازی</div>
      </div>
      <div className="nav-cat-div">
        <div className="nav-cat-text">علمی</div>
      </div>
      <div className="nav-cat-div">
        <div className="nav-cat-text">موبایل</div>
      </div>
    </div>
  );
};

export default NavCats;
