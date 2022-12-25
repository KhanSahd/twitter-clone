import React, { useEffect, useState } from "react";
import TrendingPost from "./TrendingPost";
import "../stylesheets/ExploreFeed.css";

// API KEY: c692940a8cc4442d9d756e50d1ba3221

function ExploreFeed() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
        "c692940a8cc4442d9d756e50d1ba3221"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setArticles(data.articles))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="exploreFeed">
      {articles.map((item, index) => {
        const date = new Date(item.publishedAt);
        const pst = date.toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
        });
        return (
          <TrendingPost
            key={index}
            time={pst}
            caption={item.description}
            img={item.urlToImage}
            category={item.source.name}
          />
        );
      })}
    </div>
  );
}

export default ExploreFeed;
