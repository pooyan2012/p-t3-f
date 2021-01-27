import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const HomePosts = () => {
  return (
    /**************** >>>> HomePosts start <<<< *****************/
    <div className="posts-sec">
      <div className="posts-parent-div">
        <div className="section-title">جدیدترین مطالب</div>
        <div className="posts-div">
          <div className="single-post">
            <div className="single-post-top"></div>
            <div className="single-post-bottom">
              <div className="title">موشکافی داستان فیلم Tenet کریستوفر نولان</div>
              <div className="writer">پویان عسگرپور | ۱۰ دی ۹۹، ۸:۲۱</div>
              <div className="desc">
                به ‌دنبال ظهور واریانت جدید ویروس کرونا در بریتانیا که پروتئین
                اسپایک آن جهش پیدا کرده است، نگرانی‌هایی در مورد ایجاد مقاومت در
                برابر واکسن کووید ۱۹ ایجاد شده است...
              </div>
            </div>
          </div>
          <div className="single-post">
            <div className="single-post-top"></div>
            <div className="single-post-bottom">
              <div className="title">
                هلدینگ فناوری بانک کارآفرین به‌دنبال موفقیت با نگاهی کسب ‌و
                کارانه است در این شرایط که همه چی در حال افول میباشد
              </div>
              <div className="writer">پویان عسگرپور | ۱۰ دی ۹۹، ۸:۲۱</div>
              <div className="desc">
                نتفلیکس به‌منظور بازاریابی برای فیلم‌ها و سریال‌های اختصاصی‌اش و
                پیش‌بینی تعداد بینندگان آن‌ها بر هوش مصنوعی اتکا می‌کند. این
                شرکت اخیرا نحوه‌ی استفاده از AI را شرح داده است...
              </div>
            </div>
          </div>
          <div className="single-post"></div>
          <div className="single-post"></div>
          <div className="single-post"></div>
          <div className="single-post"></div>
          <div className="single-post"></div>
          <div className="single-post"></div>
          <div className="single-post"></div>
          <div className="single-post"></div>
        </div>

        <Pagination />
      </div>
    </div>
    /**************** >>>> HomeGrid end <<<< *****************/
  );
};

export default HomePosts;
