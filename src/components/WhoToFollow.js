import React from "react";
import "../stylesheets/WhoToFollow.css";
import VerifiedIcon from "@mui/icons-material/Verified";

function WhoToFollow({ img, verified, name, username }) {
  return (
    <div className="whoToFollow">
      <div className="whoToFollow__avatar">
        <img className="avatar__image" src={img} alt={name} />
        {verified ? (
          <div className="name">
            <div className="name__flex">
              <p style={{ fontWeight: "bold" }}>{name}</p>
              <VerifiedIcon
                style={{ fontSize: "medium", color: "var(--main-color)" }}
              />
            </div>
            <p style={{ fontSize: ".9rem", color: "gray" }}>@{username}</p>
          </div>
        ) : (
          <div className="name">
            <p>{name}</p>
            <p>@{username}</p>
          </div>
        )}
      </div>
      <button
        className="textarea__Button followButton"
        style={{ backgroundColor: "black" }}
      >
        follow
      </button>
    </div>
  );
}

export default WhoToFollow;
