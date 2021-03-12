import React from "react";
import HomeGridSingle from "./HomeGridSingle";
import HomeSubGrid from "./HomeSubGrid";

const HomeGrid = () => {
  return (
    /**************** >>>> HomeGrid start <<<< *****************/
    <div className="hero-grid-sec">
      <div className="hero-grid-div">
        <div className="w-layout-grid grid">
          <HomeGridSingle
            gridImage="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ff5c3126cc8be1cd49ebfee_photo-1498050108023-c5249f4df085.jpg"
            divId="w-node-798c62728e47-129571b5"
            divStyleName="top-big-div"
            catStyleName="top-big-div-cat"
            titleStyleName="top-big-div-font"
            cat="نرم افزار"
            title="تریلر گیم‌پلی Sons of the Forest موجودات خوفناک بازی را نشان می‌دهد"
          />
          <HomeGridSingle
            gridImage="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ff5c31246e192c83651a2c0_nikita-katsevich-QXDJGPZTwxs-unsplash.jpg"
            divId="w-node-093591b29eb0-129571b5"
            divStyleName="top-right-small-div"
            catStyleName="top-small-div-cat"
            titleStyleName="top-small-div-font"
            cat="خبر"
            title="چرا ۲۰۲۱ سالی واقعا معرکه برای اکوسیستم ویندوز خواهد بود؟"
          />
          <HomeGridSingle
            gridImage="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ff5c3124cb3a05d9871cd37_photo-1526666923127-b2970f64b422.jpg"
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
            gridImage="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ff5c311fdb5c8c8bd786570_photo-1483478550801-ceba5fe50e8e.jpg"
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
