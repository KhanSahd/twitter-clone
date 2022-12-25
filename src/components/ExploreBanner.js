import React, { useEffect, useState } from "react";
import "../stylesheets/ExploreBanner.css";

function ExploreBanner() {
  const [trending, setTrending] = useState([]);
  const [error, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pic, setPic] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [random, setRandom] = useState(null);

  useEffect(() => {
    fetch(
      "http://api.mediastack.com/v1/news?countries=us&access_key=d66a50bfa5a17c937ffe89f45981029f"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        //setTrending(data.data);
        setTitle(data.data[10].title);
        setPic(data.data[10].image);
        setCategory(data.data[10].category);
      })
      .catch((err) => {
        console.error("Error: ", err);
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="exploreBanner">
      <img src={pic} />
      <div className="exploreBanner__Heading">
        <p className="heading__Category">{category}</p>
        <h1 className="heading__Title">{title}</h1>
      </div>
    </div>
  );
}

export default ExploreBanner;
