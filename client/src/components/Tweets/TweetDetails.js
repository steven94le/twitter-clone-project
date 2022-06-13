import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//components
import BigTweet from "./BigTweet";

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

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
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [tweetId]);

  return (
    <>
      <BigTweet tweet={tweet} isPending={isPending} error={error} />
    </>
  );
};

export default TweetDetails;
