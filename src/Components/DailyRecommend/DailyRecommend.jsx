import React from "react";
import "./DailyRecommend.css";
import img1 from "./activities_images/001.svg";
import img2 from "./activities_images/002.svg";
import img3 from "./activities_images/003.svg";
import img4 from "./activities_images/004.svg";

export const DailyRecommend = () => {
  return (
    <div className="DailyRecommend">
      <div>
        <span>Daily Recommend</span>
      </div>
      <div className="DailyRecommend-img">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
      </div>
    </div>
  );
};
