import React, { Fragment, useState } from "react";
import { API } from "../config";

const LoginForm = (props) => {
  const [values, setValues] = useState({
    email: "",
    passowrd: "",
    error: "",
    success: false,
  });

  const { email, password } = values;

  //higher order function(hoc): a function that return other function
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signIn = (user) => {
    //you can use axios library instead its better
    return fetch(`${API}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
  };

  const signForm = () => (
    <form
      id="wf-form-Register-Form"
      name="wf-form-Register-Form"
      data-name="Login Form"
      className="login-modal-form"
    >
      <input
        value={email}
        type="text"
        className="login-modal-password-input w-input"
        maxLength="256"
        name="field-3"
        data-name="Field 3"
        placeholder="ایمیل"
        id="field-3"
        required=""
        onChange={handleChange("email")}
      />
      <input
        value={password}
        type="password"
        className="login-modal-password-input w-input"
        maxLength="256"
        name="field-4"
        data-name="Field 4"
        placeholder="رمز عبور"
        id="field-4"
        required=""
        onChange={handleChange("password")}
      />
      <div className="login-modal-rules-div">
        <div className="login-modal-remember-me-div">
          <div className="login-modal-remember-me-text">
            مرا بخاطر داشته باش
          </div>

          <input type="checkbox" id="remember" name="remember" value="0" />
        </div>
        <div className="login-modal-pass-forgotten-text">فراموشی رمز عبور؟</div>
      </div>

      <button className="login-modal-btn w-button" onClick={handleSubmit}>
        ورود
      </button>
    </form>
  );

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
            {signForm()}
            <div className="success-message w-form-done"></div>
            <div className="error-message w-form-fail"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
