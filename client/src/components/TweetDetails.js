import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BigTweet from "./BigTweet";
// import { Redirect } from "react-router-dom";

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => {
        console.log("res", res);
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        // console.log(data.tweet);
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
