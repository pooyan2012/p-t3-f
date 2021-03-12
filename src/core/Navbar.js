import React from "react";
import NavCats from "./NavCats";
import SearchModal from "./SearchModal";
import UserModal from "./UserModal";

const Navbar = () => {

  return (
    /**************** >>>> NAVBAR start <<<< *****************/
    <div className="navbar-sec">
      <div className="nav-parent-div">
        <div className="nav-child">
          <div className="nav-div-icons">
            <UserModal className="user-icon" />
            <SearchModal className="search-icon" />
          </div>

          <NavCats />

          <div className="nav-div-logo">
            <img
              src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ff56ffeffe0b07415c6f71a_T3CH.png"
              loading="lazy"
              width="99"
              alt=""
              className="logo"
            />
          </div>
        </div>
      </div>
    </div>
    /**************** >>>> NAVBAR end <<<< *****************/
  );
};

export default Navbar;
