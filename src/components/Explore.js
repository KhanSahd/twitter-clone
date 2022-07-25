import React from "react";
import "../stylesheets/Explore.css";
import ExploreBanner from "./ExploreBanner";
import ExploreSearchbar from "./ExploreSearchbar";
import ExploreFeed from "./ExploreFeed.js";

function Explore() {
  return (
    <div className="explore">
      <ExploreSearchbar />
      <ExploreBanner />
      <ExploreFeed />
    </div>
  );
}

export default Explore;
