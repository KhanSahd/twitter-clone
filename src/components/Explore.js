import React from "react";
import "../stylesheets/Explore.css";
import { VscGear } from "react-icons/vsc";

function Explore() {
  return (
    <div className="explore">
      <div className="searchDiv">
        <input
          type="text"
          className="right__input"
          placeholder="Search twitter"
        ></input>
        <VscGear fontSize="large" />
      </div>
    </div>
  );
}

export default Explore;
