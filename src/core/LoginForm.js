import React, { useState } from "react";
import { connect } from "react-redux";
import { startLogin } from "../states/actions/auth";
import { isEmail } from "validator/lib/isEmail";

const LoginForm = ({ startLogin, auth }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, error, loading, redirectToReferrer } = values;

  //higher order function(hoc): a function that return other function
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: "", [name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValues({ ...values, loading: true });

    await startLogin({ email, password });
    if (auth.error) {
      console.log(`${auth.error}`);
      setValues({ ...values, loading: false, error: auth.error });
    }

    setValues({ ...values, loading: false });

    console.log(`2==> ${error}`);
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
            مرا بخاطر داشته باش{error}
          </div>

          <input type="checkbox" id="remember" name="remember" value="0" />
        </div>
        <div className="login-modal-pass-forgotten-text">فراموشی رمز عبور؟</div>
      </div>

      {error}

      <button className="login-modal-btn w-button" onClick={handleSubmit}>
        ورود
      </button>
    </form>
  );

  return (
    <>
      <div className="login-modal">
        <div className="login-modal-title-div">
          <div className="login-modal-header">ورود/عضویت</div>
          <div className="login-modal-registration-div">
            <button
              //onClick={props.clickHandler}
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
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  startLogin: (userData) => dispatch(startLogin(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
