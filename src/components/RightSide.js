import React from "react";
import "../stylesheets/RightSide.css";
import TrendingPost from "./TrendingPost";
import WhoToFollow from "./WhoToFollow";
import { AiOutlineSearch } from "react-icons/ai";

function RightSide({ explore }) {
  return (
    <div className="rightside">
      <div className="container">
        {explore ? (
          <div></div>
        ) : (
          <div>
            <div className="input__box">
              <input
                type="text"
                className="right__input"
                placeholder="Search Twitter"
              ></input>
            </div>
            <div className="whatsHappening">
              <h3 className="heading" style={{ paddingTop: "1rem" }}>
                What's Happening
              </h3>
              <div className="trending">
                <TrendingPost
                  category="sports"
                  time="1 hour ago"
                  caption="Kyrie Irving"
                  subcaption="Kyrie's time in Brooklyn may be coming to an end. People very close to Kyrie have suggested that the former
              Nba Champion has interest in playing for the Los Angeles Lakers"
                />
                <TrendingPost
                  category="sports"
                  time="LIVE"
                  caption="UFC 274"
                  img="https://cdn.vox-cdn.com/thumbor/9J46zKcxt3R8gIjrHBcSnIYJ9Rw=/0x0:5570x3714/1200x800/filters:focal(2332x1068:3222x1958)/cdn.vox-cdn.com/uploads/chorus_image/image/70501758/1370031142.0.jpg"
                />
                <TrendingPost
                  category="Los Angeles Times"
                  verified
                  caption="Drake Releases new Studio album"
                  img="https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"
                />
                <TrendingPost
                  category="Insider News"
                  verified
                  caption="The weather is really hot in California"
                />
                <TrendingPost
                  category="Entertainment"
                  caption="Obi-Wan new episode airs today on Disney Plus"
                  img="https://www.indiewire.com/wp-content/uploads/2022/06/JTF-FF-002127.jpg?w=780"
                />
              </div>
            </div>
          </div>
        )}
        <div className="rightSide__whoToFollow">
          <h3 className="heading">Who to follow</h3>
          <div className="people">
            <WhoToFollow
              img="https://pbs.twimg.com/profile_images/1170690523201527808/FriNRiir_400x400.png"
              name="ESPN"
              username="espn"
              verified
            />
            <WhoToFollow
              img="https://talksport.com/wp-content/uploads/sites/5/2022/02/Screenshot-2022-02-10-at-10.36.44.png?strip=all&w=475&quality=100"
              name="Israel Adesanya"
              username="IsraelAdesanya"
              verified
            />
            <WhoToFollow
              img="https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3022677.png"
              name="Conor Mcgregor"
              username="ConorMcgregor"
              verified
            />
          </div>
        </div>
        <div className="link-copy">
          <div className="links">
            <p className="link">
              <a
                href="https://twitter.com/en/tos"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>
            </p>
            <p className="link">
              <a
                href="https://twitter.com/en/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </p>
            <p className="link">
              <a
                href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                target="_blank"
                rel="noreferrer"
              >
                Cookie Policy
              </a>
            </p>
            <p className="link">
              <a
                href="https://help.twitter.com/en/resources/accessibility"
                target="_blank"
                rel="noreferrer"
              >
                Accessibility
              </a>
            </p>
            <p className="link">
              <a
                href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
                target="_blank"
                rel="noreferrer"
              >
                Ads info
              </a>
            </p>
            <p className="link">More...</p>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: "&copy; 2022 Twitter, Inc" }}
            style={{
              padding: ".2rem 1rem",
              fontSize: ".8rem",
              color: "rgb(59, 59, 59)",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
