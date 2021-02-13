import React, { Fragment } from "react";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

ReactModal.setAppElement("#user-modal");

class UserModal extends React.Component {
  state = {
    showModal: false,
    switchForm: 0,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleLoginRegisterForm = () => {
    this.setState((prevState) => {
      return {
        switchForm: prevState.switchForm === 0 ? 1 : 0,
      };
    });
  };

  /*<p className="user-modal-title">ورود/عضویت</p>
          <button
            onClick={this.handleCloseModal}
            className="user-modal-close-btn"
          >
            X
          </button>


          handleLoginRegisterForm = () => {
    this.setState((prevState, prevProps) => {
      return {
        switchForm: prevState === 0 ? 1 : 0,
      };
    });
  };
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
          <div className="register-modal-closebtn-div">
            <button
              onClick={this.handleCloseModal}
              className="user-modal-close-btn"
            >
              <img
                src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/6024e1a9859c6f637343d6d1_close-btn-small.svg"
                loading="lazy"
                alt=""
                className="register-modal-closebtn"
              />
            </button>
          </div>

          {this.state.switchForm === 0 ? (
            <LoginForm clickHandler={this.handleLoginRegisterForm} />
          ) : (
            <RegisterForm clickHandler={this.handleLoginRegisterForm} />
          )}
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
