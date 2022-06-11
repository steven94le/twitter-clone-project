import React from "react";
import SmallTweet from "./SmallTweet";

const TweetFeed = ({ userFeed }) => {
  return userFeed?.tweetIds.map((tweetId, index) => {
    const tweet = userFeed?.tweetsById[tweetId];

    return <SmallTweet props={{ userFeed, tweetId, index, tweet }} />;
  });
};

export default TweetFeed;
