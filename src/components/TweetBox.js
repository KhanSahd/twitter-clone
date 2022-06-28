import React, { useState } from "react";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import "../stylesheets/TweetBox.css";
import { Avatar } from "@mui/material";
import database from "../firebase.js";
import { doc, addDoc, collection } from "firebase/firestore";

function TweetBox() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(database, "tweets"), {
      name: "Hasbullah",
      username: "theofficialhasbullah",
      verified: true,
      text: input,
      img: "https://pbs.twimg.com/media/E2Rqt-cXoAM0Yzd.jpg",
    });
    setInput("");
  };
  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit} className="tweet__box">
        <div className="tweetBox__input">
          <Avatar
            src="https://pbs.twimg.com/media/E2Rqt-cXoAM0Yzd.jpg"
            alt="Hasbullah"
            className="middle__Image"
          />
          <div className="tweetBox__container">
            <textarea
              className="inputBox"
              id="tweet"
              placeholder="What's Happening?"
              name="tweet"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ color: "black", resize: "none" }}
              maxLength="250"
            ></textarea>
            <div className="textarea__Options">
              <div className="textarea__icons">
                <InsertPhotoOutlinedIcon className="textarea__icon" />
                <GifBoxOutlinedIcon className="textarea__icon" />
                <PollOutlinedIcon className="textarea__icon" />
                <SentimentSatisfiedOutlinedIcon className="textarea__icon" />
                <CalendarMonthOutlinedIcon className="textarea__icon" />
              </div>
              <button className="textarea__Button" onClick={handleSubmit}>
                tweet
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
