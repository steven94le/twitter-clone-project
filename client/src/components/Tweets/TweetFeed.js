import React from "react";

//components
import SmallTweet from "./SmallTweet";

const TweetFeed = ({ userFeed }) => {
  return userFeed?.tweetIds.map((tweetId, index) => {
    const tweet = userFeed?.tweetsById[tweetId];

    return (
      <SmallTweet
        props={{ userFeed, tweetId, tweet }}
        key={`${tweetId.id}-${index}`}
      />
    );
  });
};

export default TweetFeed;
