import React, { Fragment } from "react";

const LoginForm = (props) => {
  return (
    <Fragment>
      <div className="login-modal">
        <div className="login-modal-title-div">
          <div className="login-modal-header">ورود/عضویت</div>
          <div className="login-modal-registration-div">
            <button
              onClick={props.clickHandler}
              className="user-modal-close-btn"
            >
              <div className="login-modal-registration-a">عضو شوید</div>
            </button>
            <div className="login-modal-registration-q">عضو سایت نیستید؟ </div>
          </div>
        </div>
        <div className="login-modal-form-div">
          <div className="w-form">
            <form
              id="wf-form-Register-Form"
              name="wf-form-Register-Form"
              data-name="Register Form"
              className="login-modal-form"
            >
              <input
                type="text"
                className="login-modal-password-input w-input"
                maxLength="256"
                name="field-3"
                data-name="Field 3"
                placeholder="ایمیل"
                id="field-3"
                required=""
              />
              <input
                type="password"
                className="login-modal-password-input w-input"
                maxLength="256"
                name="field-4"
                data-name="Field 4"
                placeholder="رمز عبور"
                id="field-4"
                required=""
              />
              <div className="login-modal-rules-div">
                <div className="login-modal-remember-me-div">
                  <div className="login-modal-remember-me-text">
                    مرا بخاطر داشته باش
                  </div>

                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="0"
                  />
                </div>
                <div className="login-modal-pass-forgotten-text">
                  فراموشی رمز عبور؟
                </div>
              </div>
              <a href="#" className="login-modal-btn w-button">
                ورود
              </a>
            </form>
            <div className="success-message w-form-done"></div>
            <div className="error-message w-form-fail"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
