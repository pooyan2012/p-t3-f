import React, { useState, useEffect } from "react";
import HomeGridSingle from "./HomeGridSingle";
import HomeSubGrid from "./HomeSubGrid";

const HomeGrid = () => {
  return (
    /**************** >>>> HomeGrid start <<<< *****************/
    <div className="hero-grid-sec">
      <div className="hero-grid-div">
        <div className="w-layout-grid grid">
          <HomeGridSingle
            divId="w-node-798c62728e47-129571b5"
            divStyleName="top-big-div"
            catStyleName="top-big-div-cat"
            titleStyleName="top-big-div-font"
            cat="نرم افزار"
            title="تریلر گیم‌پلی Sons of the Forest موجودات خوفناک بازی را نشان می‌دهد"
          />
          <HomeGridSingle
            divId="w-node-093591b29eb0-129571b5"
            divStyleName="top-right-small-div"
            catStyleName="top-small-div-cat"
            titleStyleName="top-small-div-font"
            cat="خبر"
            title="چرا ۲۰۲۱ سالی واقعا معرکه برای اکوسیستم ویندوز خواهد بود؟"
          />
          <HomeGridSingle
            divId="w-node-4b1645d9add3-129571b5"
            divStyleName="second-row-medium-div"
            catStyleName="second-row-medium-cat"
            titleStyleName="top-small-div-font second-row-medium-div-font"
            cat="کامپیوتر"
            title="تحولات سازمانی در فولکس واگن؛ از حفظ لامبورگینی و دوکاتی تا
            واگذاری مدیریت بن"
          />

          <HomeSubGrid />

          <HomeGridSingle
            divId="w-node-e228048e7a04-129571b5"
            divStyleName="last-row-small-div"
            catStyleName="top-small-div-cat last-row-smal-div-cat"
            titleStyleName="top-small-div-font last-row-small-div-font"
            cat="خبر"
            title="راهکار مهندسی ژنتیک برای مبارزه با تغییرات اقلیمی"
          />
        </div>
      </div>
    </div>
    /**************** >>>> HomeGrid end <<<< *****************/
  );
};

export default HomeGrid;
