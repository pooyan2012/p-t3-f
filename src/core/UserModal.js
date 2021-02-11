import React, { Fragment } from "react";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";

ReactModal.setAppElement("#user-modal");

class UserModal extends React.Component {
  state = {
    showModal: false,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  /*<p className="user-modal-title">ورود/عضویت</p>
          <button
            onClick={this.handleCloseModal}
            className="user-modal-close-btn"
          >
            X
          </button>
          */

  render() {
    return (
      <Fragment>
        <button onClick={this.handleOpenModal} id="user-btn">
          <img
            src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ffea0190775a5438bf5fea3_user-ico.svg"
            loading="lazy"
            alt=""
            className="user-icon"
          />
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="user-modal"
          overlayClassName="user-overlay"
        >
          <div class="register-modal-closebtn-div">
            <button
              onClick={this.handleCloseModal}
              className="user-modal-close-btn"
            >
              <img
                src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/6024e1a9859c6f637343d6d1_close-btn-small.svg"
                loading="lazy"
                alt=""
                class="register-modal-closebtn"
              />
            </button>
          </div>
          <div class="register-modal-title-div">
            <div class="register-modal-header">ورود/عضویت</div>
            <div class="register-modal-registration-div">
              <div class="register-modal-registration-a">وارد شوید</div>
              <div class="register-modal-registration-q">عضو سایت هستید؟ </div>
            </div>
          </div>
          <div class="register-modal-form-div">
            <div class="w-form">
              <form
                id="wf-form-Register-Form"
                name="wf-form-Register-Form"
                data-name="Register Form"
                class="register-modal-form"
              >
                <div class="register-modal-name-lname-div">
                  <input
                    type="text"
                    class="register-modal-lname-input w-input"
                    maxlength="256"
                    name="field"
                    data-name="Field"
                    placeholder="نام خانوادگی"
                    id="field"
                    required=""
                  />
                  <input
                    type="text"
                    class="register-modal-name-input w-input"
                    maxlength="256"
                    name="field-2"
                    data-name="Field 2"
                    placeholder="نام"
                    id="field-2"
                    required=""
                  />
                </div>
                <input
                  type="text"
                  class="register-modal-password-input w-input"
                  maxlength="256"
                  name="field-3"
                  data-name="Field 3"
                  placeholder="ایمیل"
                  id="field-3"
                  required=""
                />
                <input
                  type="text"
                  class="register-modal-password-input w-input"
                  maxlength="256"
                  name="field-3"
                  data-name="Field 3"
                  placeholder="رمز عبور"
                  id="field-3"
                  required=""
                />
                <div class="register-modal-rules-div">
                  <div class="register-modal-rules-text">را قبول دارم؟ </div>
                  <div class="register-modal-rules-link">قوانین سایت</div>
                  <input type="checkbox" id="rules" name="rules1" value="0" />
                </div>
                <a
                  href="http://localhost:3000"
                  class="register-modal-btn w-button"
                >
                  عضویت
                </a>
              </form>
              <div class="success-message w-form-done"></div>
              <div class="error-message w-form-fail"></div>
            </div>
          </div>
        </ReactModal>
      </Fragment>
    );
  }
}

const props = {};

ReactDOM.render(
  <UserModal {...props} />,
  document.getElementById("user-modal")
);

export default UserModal;
