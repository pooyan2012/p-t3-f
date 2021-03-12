import React from "react";
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
  }
  
  <p className="search-modal-title">جستوجو در سایت</p>
          <button
            onClick={this.handleCloseModal}
            className="search-modal-close-btn"
          >
            Close Modal
          </button>
  */

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
      <>
        <button
          onClick={this.handleOpenModal}
          className="search-icon"
          id="search-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="search-icon"
          >
            <path
              d="M14.2857 13.5315H13.3714L13.0286 13.1886C14.1715 11.9315 14.8572 10.2172 14.8572 8.38859C14.8571 4.27431 11.5429 0.960022 7.42857 0.960022C3.31429 0.960022 0 4.27431 0 8.38859C0 12.5029 3.31429 15.8172 7.42857 15.8172C9.25714 15.8172 10.9714 15.1315 12.2286 13.9886L12.5714 14.3314V15.2457L18.2857 20.96L20 19.2457L14.2857 13.5315ZM7.42857 13.5315C4.57143 13.5315 2.28571 11.2457 2.28571 8.38859C2.28571 5.53145 4.57143 3.24574 7.42857 3.24574C10.2857 3.24574 12.5714 5.53145 12.5714 8.38859C12.5714 11.2457 10.2857 13.5315 7.42857 13.5315Z"
              fill="#CFCFCF"
            />
          </svg>
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="search-modal">
            <div className="closebtn-sec w-clearfix">
              <div className="search-modal-closebtn-div">
                <button
                  onClick={this.handleCloseModal}
                  className="search-modal-close-btn"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/6023da169d00e7dc304a8bae_closebtn.svg"
                    loading="lazy"
                    alt=""
                    className="modal-closebtn"
                  />
                </button>
              </div>
            </div>
            <div className="searchbar-sec">
              <div className="search-modal-searchbar">
                <div className="form-block-2 w-form">
                  <form
                    id="search-modal-form"
                    name="wf-form-search-modal-form"
                    data-name="search modal form"
                    className="form"
                  >
                    <input
                      type="text"
                      className="text-field w-input"
                      autoFocus={true}
                      maxLength="256"
                      name="search-modal-bar"
                      data-name="search-modal-bar"
                      placeholder="جستوجو"
                      id="search-modal-bar"
                    />
                    <a href="/" className="search-btn w-button">
                      temp
                    </a>
                  </form>
                  <div className="w-form-done"></div>
                  <div className="w-form-fail"></div>
                </div>
              </div>
            </div>
            <div className="search-result-sec">
              <div className="result-div">
                <div className="single-search-result">
                  <div className="search-result-title">
                    نسل بعدی ایرپاد می‌تواند کنترل دستگاه‌ها را با ضربه زدن به
                    بدن فراهم می‌کند
                  </div>
                  <div className="search-result-desc">
                    در نتایج بنچمارک گیک‌بنچ مشخص می‌شود که شیائومی می 11 با
                    برخورداری از تراشه اسنپدراگون ۸۸۸ عملکردی بهتر از دستگاهی
                    مجهز به تراشه کرین ۹۰۰۰ دارد...
                  </div>
                </div>
                <div className="single-search-result">
                  <div className="search-result-title">
                    موشکافی داستان فیلم Tenet کریستوفر نولان
                  </div>
                  <div className="search-result-desc">
                    به ‌دنبال ظهور واریانت جدید ویروس کرونا در بریتانیا که
                    پروتئین اسپایک آن جهش پیدا کرده است، نگرانی‌هایی در مورد
                    ایجاد مقاومت در برابر واکسن کووید ۱۹ ایجاد شده است...
                  </div>
                </div>
                <div className="single-search-result">
                  <div className="search-result-title">
                    هلدینگ فناوری بانک کارآفرین به‌دنبال موفقیت با نگاهی
                    کسب‌وکارانه است
                  </div>
                  <div className="search-result-desc">
                    به گزارش بلومبرگ، سوئد تحقیقاتی دوساله را آغاز کرده است تا
                    امکان استفاده از ارز دیجیتال به‌عنوان واحد پول رسمی کشور را
                    بررسی کند. این کشور کمتر از هر جامعه‌ی دیگر در دنیا پول نقد
                    دارد...
                  </div>
                </div>
                <div className="single-search-result">
                  <div className="search-result-title">
                    ایلان ماسک: دسترسی تمام خودروهای برقی به شبکه سوپرشارژر تسلا
                  </div>
                  <div className="search-result-desc">
                    بر اساس اتهام اخیر مقامات ایالت تگزاس و ۹ ایالت دیگر، فیسبوک
                    و گوگل برای مقابله با اتهامات انحصارطلبی و حفظ سهم بازار
                    تبلیغات آنلاین با یکدیگر همکاری می‌کنند...
                  </div>
                </div>
                <div className="single-search-result">
                  <div className="search-result-title">
                    ایرانسل سرعت ۲/۵ گیگابیت بر ثانیه را در شبکه 5G ثبت کرد
                  </div>
                  <div className="search-result-desc">
                    به‌کمک خورشید می‌توان تلسکوپی قدرتمند را برای عکس‌برداری
                    مستقیم از سطح سیاره‌های فراخورشیدی توسعه داد و به
                    سکونت‌پذیری آن‌ها پی برد...
                  </div>
                </div>
                <div className="single-search-result">
                  <div className="search-result-title">
                    هلدینگ فناوری بانک کارآفرین به‌دنبال موفقیت با نگاهی
                    کسب‌وکارانه است
                  </div>
                  <div className="search-result-desc">
                    به گزارش بلومبرگ، سوئد تحقیقاتی دوساله را آغاز کرده است تا
                    امکان استفاده از ارز دیجیتال به‌عنوان واحد پول رسمی کشور را
                    بررسی کند. این کشور کمتر از هر جامعه‌ی دیگر در دنیا پول نقد
                    دارد...
                  </div>
                </div>
                <div className="single-search-result">
                  <div className="search-result-title">
                    هلدینگ فناوری بانک کارآفرین به‌دنبال موفقیت با نگاهی
                    کسب‌وکارانه است
                  </div>
                  <div className="search-result-desc">
                    به گزارش بلومبرگ، سوئد تحقیقاتی دوساله را آغاز کرده است تا
                    امکان استفاده از ارز دیجیتال به‌عنوان واحد پول رسمی کشور را
                    بررسی کند. این کشور کمتر از هر جامعه‌ی دیگر در دنیا پول نقد
                    دارد...
                  </div>
                </div>
                <div className="single-search-result">
                  <div className="search-result-title">
                    هلدینگ فناوری بانک کارآفرین به‌دنبال موفقیت با نگاهی
                    کسب‌وکارانه است
                  </div>
                  <div className="search-result-desc">
                    به گزارش بلومبرگ، سوئد تحقیقاتی دوساله را آغاز کرده است تا
                    امکان استفاده از ارز دیجیتال به‌عنوان واحد پول رسمی کشور را
                    بررسی کند. این کشور کمتر از هر جامعه‌ی دیگر در دنیا پول نقد
                    دارد...
                  </div>
                </div>
              </div>
            </div>
            <div className="search-pagination-sec">
              <div className="pagination search-modal-pagination">
                <div className="unselected-page-num">۶۵۲۷</div>
                <div className="pagination-dots">...</div>
                <div className="unselected-page-num">5‍</div>
                <div className="unselected-page-num">۴</div>
                <div className="unselected-page-num">۳</div>
                <div className="unselected-page-num">۲</div>
                <div className="selected-page-num">۱</div>
              </div>
            </div>
          </div>
        </ReactModal>
      </>
    );
  }
}

const props = {};

ReactDOM.render(
  <SearchModal {...props} />,
  document.getElementById("search-modal")
);

export default SearchModal;
