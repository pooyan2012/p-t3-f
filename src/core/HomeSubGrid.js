import React from "react";
import SubGridSmallPost from "./SubGridSmallPost";

const HomeSubGrid = () => {
  return (
    <div id="w-node-0ea76eb99c35-129571b5" className="second-row-big-div">
      <div className="top-div">
        <div className="top-big-div-cat second-row-big-div-cat">نرم افزار</div>
        <div className="top-big-div-font second-row-big-div-font">
          امنیت به زبان ساده: تکنولوژی تشخیص چهره چه مزایا و معایبی دارد؟
        </div>
      </div>
      <div className="bottom-div">
        <div className="inner-div">
          <SubGridSmallPost
            title="اولین کلیسای جامع مسیحیت جهان کجاست؟"
            authorDate="پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶"
          />
          <SubGridSmallPost
            title="نسل بعدی ایرپاد می‌تواند کنترل دستگاه‌ها را با ضربه زدن به بدن
            فراهم می‌کند"
            authorDate="پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶"
          />
          <SubGridSmallPost
            title="امنیت به زبان ساده: تکنولوژی تشخیص چهره چه مزایا و معایبی دارد؟"
            authorDate="پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶"
          />
          <SubGridSmallPost
            title="اینتل چگونه به‌کمک ویروس کرونا توانست ظرفیت تولید تراشه را
            افزایش دهد؟"
            authorDate="پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSubGrid;
