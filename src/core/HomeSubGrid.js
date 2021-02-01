import React from "react";
import SubGridSmallPost from "./SubGridSmallPost";
import SubGridBigPost from "./SubGridBigPost";

const HomeSubGrid = () => {
  return (
    <div id="w-node-0ea76eb99c35-129571b5" className="second-row-big-div">
      <SubGridBigPost
        subGridBigImage="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ff5c3126062a380885cf5aa_photo-1484557052118-f32bd25b45b5.jpg"
        subBigDivCat="نرم افزار"
        subBigDivTitle="امنیت به زبان ساده: تکنولوژی تشخیص چهره چه مزایا و معایبی دارد؟"
      />
      <div className="bottom-div">
        <div className="inner-div">
          <SubGridSmallPost
            subGridImage="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ffac4f6c715f8415b4ebb9e_Rectangle%2079.jpg"
            title="اولین کلیسای جامع مسیحیت جهان کجاست؟"
            authorDate="پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶"
          />
          <SubGridSmallPost
            subGridImage="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ffac4f6c715f8415b4ebb9e_Rectangle%2079.jpg"
            title="نسل بعدی ایرپاد می‌تواند کنترل دستگاه‌ها را با ضربه زدن به بدن
            فراهم می‌کند"
            authorDate="پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶"
          />
          <SubGridSmallPost
            subGridImage="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ffac4f6c715f8415b4ebb9e_Rectangle%2079.jpg"
            title="امنیت به زبان ساده: تکنولوژی تشخیص چهره چه مزایا و معایبی دارد؟"
            authorDate="پویان عسگرپور | ۱۰ دی ۹۹، ۱۲:۳۶"
          />
          <SubGridSmallPost
            subGridImage="https://uploads-ssl.webflow.com/5ff542e0e6322e20ee9571b4/5ffac4f6c715f8415b4ebb9e_Rectangle%2079.jpg"
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
