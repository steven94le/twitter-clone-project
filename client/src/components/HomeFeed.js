import React, { useContext } from "react";
import { HomeFeedContext } from "./HomeFeedContext";

// Go through the API documentation to find the right API endpoint,
// and update the HomeFeed component to fetch the data and use
// the results to render an array of Tweets.

// You'll need to create
// a Tweet component that takes the data for a single Tweet, and
// renders the appropriate UI.

// GET /api/me/home-feed
// Get all the tweets from all the users that the current user is following.

// GET /api/:handle/feed
// Returns a list of tweets authored by the user specified with the :handle param. Includes any retweets that user has made.

const HomeFeed = () => {
  const { feed, feedStatus } = useContext(HomeFeedContext);
  // console.log("feed", feed);

  return feed.tweetIds.map((tweetId) => {
    const tweet = feed.tweetsById[tweetId];
    // console.log("tweet", tweet);
    return <div>{tweet.status}</div>;
  });
};

export default HomeFeed;
