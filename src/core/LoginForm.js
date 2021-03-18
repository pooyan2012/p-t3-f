import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../states/actions/auth";
import Loading from "./Loading";
import isEmail from "validator/lib/isEmail";

const LoginForm = (props) => {
  const { startLogin, auth } = props;
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, error, loading, redirectToReferrer } = values;

  React.useEffect(() => {
    console.log(`========>========> ${JSON.stringify(values)}`);
  }, [values]);

  //higher order function(hoc): a function that return other function
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: "", [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({ ...values, loading: true });

    if (!isEmail(email)) {
      setValues({
        ...values,
        loading: false,
        error: "لطفا ایمیل خود را بصورت صحیح وارد کنید",
      });
      return;
    }

    //setTimeout(() => {
    startLogin({ email, password })
      .then((response) => {
        if (response.error) {
          console.log(`**********: ${JSON.stringify(response)}`);

          return setValues({
            ...values,
            loading: false,
            error: response.error,
          });
        }

        setValues({ ...values, loading: false });
      })
      .catch((e) => console.log(e));
    //}, 5000); //make a delay
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
              onClick={props.clickHandler}
              className="user-modal-close-btn"
            >
              <div className="login-modal-registration-a">عضو شوید</div>
            </button>
            <div className="login-modal-registration-q">عضو سایت نیستید؟ </div>
          </div>
        </div>
        <div className="login-modal-form-div">
          <div style={{ height: `7px` }}> {loading ? <Loading /> : ""}</div>
          <br />
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
