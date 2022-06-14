import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//components
import BigTweet from "./BigTweet";

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setTweet(data.tweet);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
      });
  }, [tweetId]);

  return (
    <>
      <BigTweet props={{ tweet, isPending }} />
    </>
  );
};

export default TweetDetails;
