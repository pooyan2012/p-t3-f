import React, { useState, useEffect } from "react";
import HomeGridSingle from "./HomeGridSingle";

const HomeGrid = () => {
  return (
    /**************** >>>> HomeGrid start <<<< *****************/
    <div class="hero-grid-sec">
      <div class="hero-grid-div">
        <div class="w-layout-grid grid">
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
          {`/////////////////////////////////////////////////////////////////////////////////`}
          <div id="w-node-0ea76eb99c35-129571b5" class="second-row-big-div">
            <div class="top-div">
              <div class="top-big-div-cat second-row-big-div-cat">
                نرم افزار
              </div>
              <div class="top-big-div-font second-row-big-div-font">
                امنیت به زبان ساده: تکنولوژی تشخیص چهره چه مزایا و معایبی دارد؟
              </div>
            </div>
            <div class="bottom-div">
              <div class="inner-div">
                <div class="inside-div">
                  <div class="hero-text-div">
                    <div class="title-small">
                      اولین کلیسای جامع مسیحیت جهان کجاست؟
                    </div>
                    <div class="hero-writer-text">
                      پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶
                    </div>
                  </div>
                  <div class="hero-pic-div"></div>
                </div>
                <div class="inside-div">
                  <div class="hero-text-div">
                    <div class="title-small">
                      نسل بعدی ایرپاد می‌تواند کنترل دستگاه‌ها را با ضربه زدن به
                      بدن فراهم می‌کند
                    </div>
                    <div class="hero-writer-text">
                      پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶
                    </div>
                  </div>
                  <div class="hero-pic-div"></div>
                </div>
                <div class="inside-div">
                  <div class="hero-text-div">
                    <div class="title-small">
                      امنیت به زبان ساده: تکنولوژی تشخیص چهره چه مزایا و معایبی
                      دارد؟
                    </div>
                    <div class="hero-writer-text">
                      پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶
                    </div>
                  </div>
                  <div class="hero-pic-div"></div>
                </div>
                <div class="inside-div">
                  <div class="hero-text-div">
                    <div class="title-small">
                      اینتل چگونه به‌کمک ویروس کرونا توانست ظرفیت تولید تراشه را
                      افزایش دهد؟
                    </div>
                    <div class="hero-writer-text">
                      پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶
                    </div>
                  </div>
                  <div class="hero-pic-div"></div>
                </div>
              </div>
            </div>
          </div>
          {`/////////////////////////////////////////////////////////////////////////////////`}

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
