import React from "react";

import TweetActions from "./TweetActions";
import SmallTweet from "./SmallTweet";

// GET /api/:handle/feed
// Returns a list of tweets authored by the user specified with the :handle param. Includes any retweets that user has made.

const HomeFeed = () => {
  return (
    <>
      <SmallTweet />
      <TweetActions />
    </>
  );
};

export default HomeFeed;
