import React, { useState } from "react";
import "../stylesheets/Middle.css";
import Feed from "./Feed";
import TweetBox from "./TweetBox";
import Header from "./Header";

function Middle({ page, explore }) {
  return (
    <div className="middle">
      <Header page={page} />
      <TweetBox />
      <Feed />
    </div>
  );
}

export default Middle;
