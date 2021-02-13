import React, { Fragment } from "react";

const RegisterForm = (props) => {
  return (
    <Fragment>
      <div className="register-modal-title-div">
        <div className="register-modal-header">ورود/عضویت</div>
        <div className="register-modal-registration-div">
          <button onClick={props.clickHandler} className="user-modal-close-btn">
            <div className="register-modal-registration-a">وارد شوید</div>
          </button>
          <div className="register-modal-registration-q">عضو سایت هستید؟ </div>
        </div>
      </div>
      <div className="register-modal-form-div">
        <div className="w-form">
          <form
            id="wf-form-Register-Form"
            name="wf-form-Register-Form"
            data-name="Register Form"
            className="register-modal-form"
          >
            <div className="register-modal-name-lname-div">
              <input
                type="text"
                className="register-modal-lname-input w-input"
                maxLength="256"
                name="field"
                data-name="Field"
                placeholder="نام خانوادگی"
                id="field"
                required=""
              />
              <input
                type="text"
                className="register-modal-name-input w-input"
                maxLength="256"
                name="field-2"
                data-name="Field 2"
                placeholder="نام"
                id="field-2"
                required=""
              />
            </div>
            <input
              type="text"
              className="register-modal-password-input w-input"
              maxLength="256"
              name="field-3"
              data-name="Field 3"
              placeholder="ایمیل"
              id="field-3"
              required=""
            />
            <input
              type="password"
              className="register-modal-password-input w-input"
              maxLength="256"
              name="field-4"
              data-name="Field 4"
              placeholder="رمز عبور"
              id="field-4"
              required=""
            />
            <div className="register-modal-rules-div">
              <div className="register-modal-rules-text">را قبول دارم؟ </div>
              <div className="register-modal-rules-link">قوانین سایت</div>
              <input type="checkbox" id="rules" name="rules1" value="0" />
            </div>
            <a
              href="http://localhost:3000"
              className="register-modal-btn w-button"
            >
              عضویت
            </a>
          </form>
          <div className="success-message w-form-done"></div>
          <div className="error-message w-form-fail"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterForm;
