import Avatar from "@mui/material/Avatar";
import "../stylesheets/Tweet.css";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useState } from "react";

function Tweet({ name, username, url, text, verified }) {
  const [comments, setComments] = useState(0);
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);

  function incrementComments() {
    setComments(comments + 1);
  }
  function incrementLikes() {
    setLikes(likes + 1);
  }
  function incrementRetweets() {
    setRetweets(retweets + 1);
  }

  return (
    <div className="tweet">
      <div className="tweet__deets">
        <Avatar
          src={url}
          alt={name}
          style={{ width: "50px", height: "50px" }}
        />
        <div className="tweet__container">
          <div className="tweet__details">
            <div className="tweet__name">
              <div className="name__verified">
                <p className="tweet__detailsName">{name}</p>
                {verified ? (
                  <VerifiedIcon
                    style={{ fontSize: "medium", color: "var(--main-color)" }}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              <p className="tweet__detailsUsername">@{username}</p>
            </div>

            <p className="tweet__detailsContent">{text}</p>
          </div>
          <div className="tweet__icons">
            <div className="icons__box">
              <ModeCommentOutlinedIcon
                onClick={incrementComments}
                className="icon"
              />
              <p>{comments}</p>
            </div>
            <div className="icons__box">
              <AutorenewOutlinedIcon
                onClick={incrementRetweets}
                className="icon"
              />
              <p>{retweets}</p>
            </div>
            <div className="icons__box">
              <FavoriteBorderOutlinedIcon
                onClick={incrementLikes}
                className="icon"
              />
              <p>{likes}</p>
            </div>

            <IosShareOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
