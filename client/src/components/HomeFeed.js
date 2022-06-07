import React, { useContext } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

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
  const { feed } = useContext(HomeFeedContext);
  console.log("feed", feed);
  //conditional chaining
  return feed?.tweetIds.map((tweetId) => {
    const tweet = feed.tweetsById[tweetId];
    // console.log("tweet", tweet);
    return (
      <Wrapper key={`${tweetId}`}>
        <TweetHeader>
          <TweetAvatar src={tweet.author.avatarSrc} />
          <div>{tweet.author.displayName}</div>
          <div>@{tweet.author.handle}</div>
          <div>{tweet.timestamp}</div>
        </TweetHeader>
        <TweetContent>
          <div>{tweet.status}</div>
          {tweet.media[0] ? (
            <TweetImg
              src={tweet.media[0].url}
              size={"24px"}
              alt="cat pic tweet"
            />
          ) : null}
        </TweetContent>
        {/* make action bar into tweet component */}
        {/* to re-use in big tweet */}
        <TweetActionBar>
          <FiMessageCircle size={"24px"} />
          <FiRepeat size={"24px"} />
          <FiHeart size={"24px"} />
          <FiShare size={"24px"} />
        </TweetActionBar>
      </Wrapper>
    );
  });
};

export default HomeFeed;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const TweetAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding-right: 10px;
`;

const TweetImg = styled.img`
  width: 75%;
  height: 75%;
  margin-top: 10px;
  border-radius: 15px;
`;

const TweetHeader = styled.header`
  display: flex;
`;

const TweetContent = styled.div`
  margin: -20px 0 0 60px;
`;

const TweetActionBar = styled.div`
  margin: 20px 0 10px 60px;
  width: 500px;

  & :not(:first-child) {
    margin-left: 75px;
  }
`;
