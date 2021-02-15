import React, { Fragment } from "react";

const ProfileForm = () => {
  return (
    <Fragment>
      <div className="profile-modal-pic"></div>
      <div className="profile-modal-title-div">
        <div className="profile-modal-greeting">سلام پویان، خوش آمدی</div>
        <div className="profile-modal-position">مدیر سایت</div>
      </div>
      <div className="profile-modal-list">
        <div className="profile-modal-list-item">
          <div className="profile-modal-list-item-text">حساب کاربری</div>
          <img
            src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/602a2a69bae4ef6cab7192b0_user-profile-icon.svg"
            loading="lazy"
            alt=""
            className="profile-modal-list-item-img"
          />
        </div>
        <div className="profile-modal-list-item">
          <div className="profile-modal-list-item-text">تنظیمات حساب</div>
          <img
            src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/602a2a6907f20d95e604bfce_setting-icon.svg"
            loading="lazy"
            alt=""
            className="profile-modal-list-item-img"
          />
        </div>
      </div>
      <div className="profile-modal-form-div">
        <div className="w-form">
          <form
            id="wf-form-Register-Form"
            name="wf-form-Register-Form"
            data-name="Register Form"
            className="profile-modal-form"
          >
            <a href="#" className="profile-modal-btn w-button">
              خروج
            </a>
          </form>
          <div className="success-message w-form-done"></div>
          <div className="error-message w-form-fail"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileForm;
