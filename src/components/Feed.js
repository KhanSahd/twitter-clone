import React, { useEffect, useState } from "react";
import Tweet from "./Tweet";
import data from "../json.json";
import database from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

function Feed() {
  const [tweets, settweets] = useState([]);

  /* const [name, setName] = useState("");
  const [userName, setUsername] = useState(""); */

  useEffect(() => {
    /* settweets(data.data);
    setName(data.includes.users[0].name);
    setUsername(data.includes.users[0].username); */
    const colref = collection(database, "tweets");
    getDocs(colref).then((snapshot) => {
      settweets(snapshot.docs.map((doc) => doc.data()));
    });
  }, [tweets]);

  return (
    <div className="feed">
      {tweets.map((item) => {
        return (
          <Tweet
            key={item.id}
            text={item.text}
            name={item.name}
            username={item.username}
            verified={item.verified}
            url={item.img}
          />
        );
      })}
    </div>
  );
}

export default Feed;
