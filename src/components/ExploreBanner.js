import React from "react";
import "../stylesheets/ExploreBanner.css";

function ExploreBanner() {
  return (
    <div className="exploreBanner">
      <img src="https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2020/05/1140-coronavirus-vaccine.imgcache.rev.web.1740.1000.jpg" />
      <div className="exploreBanner__Heading">
        <p className="heading__Category">US Natonal News</p>
        <h1 className="heading__Title">Get Vaccinated</h1>
      </div>
    </div>
  );
}

export default ExploreBanner;
