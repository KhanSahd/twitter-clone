import React from "react";
import { VscGear } from "react-icons/vsc";
import "../stylesheets/ExploreSearchbar.css";

function ExploreSearchbar() {
  return (
    <div className="exploreSearchbar">
      <input
        type="text"
        className="right__input"
        placeholder="Search twitter"
      ></input>
      <VscGear fontSize="large" />
    </div>
  );
}

export default ExploreSearchbar;
