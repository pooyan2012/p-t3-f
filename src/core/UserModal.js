import React, { Fragment } from "react";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";

ReactModal.setAppElement("#user-modal");

class UserModal extends React.Component {
  /*constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }*/

  state = {
    showModal: false,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

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
          <p className="user-modal-title">ورود/عضویت</p>
          <button
            onClick={this.handleCloseModal}
            className="user-modal-close-btn"
          >
            X
          </button>
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
