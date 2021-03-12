import React from "react";
import ReactModal from "react-modal";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import { connect } from "react-redux";

ReactModal.setAppElement("#user-modal");

class UserModal extends React.Component {
  state = {
    showModal: false,
    switchForm: 0,
  };

  handleToggleModal = () => {
    //console.log("==============> " + JSON.stringify(this.props.auth.user));
    this.setState({ showModal: !this.state.showModal });
  };

  handleSwitchLoginRegisterForm = () => {
    this.setState((prevState) => {
      return {
        switchForm: prevState.switchForm === 0 ? 1 : 0,
      };
    });
  };

  handleRenderingUserModals = () => {
    if (this.props.auth.user.user._id) {
      return <ProfileForm />;
    } else {
      return this.state.switchForm === 0 ? (
        <LoginForm clickHandler={this.handleSwitchLoginRegisterForm} />
      ) : (
        <RegisterForm clickHandler={this.handleSwitchLoginRegisterForm} />
      );
    }
  };

  render() {
    return (
      <>
        <button
          onClick={this.handleToggleModal}
          id="user-btn"
          className="user-icon"
        >
          <svg
            className="user-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 10.96C12.75 10.96 15 8.71002 15 5.96002C15 3.21002 12.75 0.960022 10 0.960022C7.25 0.960022 5 3.21002 5 5.96002C5 8.71002 7.25 10.96 10 10.96ZM10 13.46C6.625 13.46 0 15.085 0 18.46V20.96H20V18.46C20 15.085 13.375 13.46 10 13.46Z"
              fill={this.props.auth.user.user.name ? "#4796FF" : "#CFCFCF"}
            />
          </svg>
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleToggleModal}
          className="user-modal"
          overlayClassName="user-overlay"
        >
          <div className="register-modal-closebtn-div">
            <button
              onClick={this.handleToggleModal}
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
          {this.handleRenderingUserModals()}
        </ReactModal>
      </>
    );
  }
}

/*
const props = {};

ReactDOM.render(
  <UserModal {...props} />,
  document.getElementById("user-modal")
);
*/

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(UserModal);
