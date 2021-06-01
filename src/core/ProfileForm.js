import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../states/actions/auth";

const ProfileForm = ({ startLogout, user }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("this is from logout!!!!!!");
      await startLogout();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="profile-modal-pic"></div>
      <div className="profile-modal-title-div">
        <div className="profile-modal-greeting">
          سلام {user.user.name}، خوش آمدی
        </div>
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
            <button
              className="profile-modal-btn w-button"
              onClick={handleSubmit}
            >
              خروج
            </button>
          </form>
          <div className="success-message w-form-done"></div>
          <div className="error-message w-form-fail"></div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
