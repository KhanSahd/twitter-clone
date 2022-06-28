import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import "../stylesheets/TrendingPost.css";

function TrendingPost({
  category,
  time,
  caption,
  img,
  hashtag,
  verified,
  subcaption,
}) {
  return (
    <div className="trendingPost">
      <div className="trendingPost__text">
        {verified ? (
          <div className="trendingPost__Category">
            <div className="trendingPost__CategoryFlex">
              <p>{category}</p>
              <VerifiedIcon
                style={{ fontSize: "medium", color: "var(--main-color)" }}
              />
            </div>
            <p className="category__dot">*</p>
            <p>{time}</p>
          </div>
        ) : (
          <div className="trendingPost__Category">
            <p>{category}</p>
            <p className="category__dot">*</p>
            <p style={{ textTransform: "uppercase" }}>{time}</p>
          </div>
        )}
        <div className="trendingPost__caption">
          <p>{caption}</p>
          <p
            style={{ color: "gray", fontSize: ".9rem", fontWeight: "lighter" }}
          >
            {subcaption}
          </p>
        </div>
      </div>
      {img ? <img src={img} className="trendingPost__Image" /> : <div></div>}
    </div>
  );
}

export default TrendingPost;
