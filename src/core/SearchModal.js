import React, { Fragment } from "react";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";

ReactModal.setAppElement("#search-modal");

class SearchModal extends React.Component {
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
        <button onClick={this.handleOpenModal} id="search-btn">
          <img
            src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ffea0198d5cbf052c0adc05_search-ico.svg"
            loading="lazy"
            alt=""
            className="search-icon"
          />
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <p className="search-modal-title">جستوجو در سایت</p>
          <button
            onClick={this.handleCloseModal}
            className="search-modal-close-btn"
          >
            Close Modal
          </button>
        </ReactModal>
      </Fragment>
    );
  }
}

const props = {};

ReactDOM.render(
  <SearchModal {...props} />,
  document.getElementById("search-modal")
);

export default SearchModal;
