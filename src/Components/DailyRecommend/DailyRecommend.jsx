import React from "react";
import "./DailyRecommend.css";
// import img1 from "./activities_images/001.svg";
// import img2 from "./activities_images/002.svg";
// import img3 from "./activities_images/003.svg";
// import img4 from "./activities_images/004.svg";

const DailyRecommend = () => {
  return (
    <div className="DailyRecommend">
      <div>
        <p>Daily Recommend</p>
      </div>
      <div className="DailyRecommend-img">
        <div><img src="/activities_images/001.svg" /></div>
        <div><img src="/activities_images/002.svg" /></div>
        <div><img src="/activities_images/003.svg" /></div>
        <div><img src="/activities_images/004.svg" /></div>
      </div>
    </div>
  );
};
export default DailyRecommend