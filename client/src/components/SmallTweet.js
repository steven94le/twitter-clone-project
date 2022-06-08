import React, { useContext } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";

const SmallTweet = () => {
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
      </Wrapper>
    );
  });
};

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const TweetHeader = styled.header`
  display: flex;
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

const TweetContent = styled.div`
  margin: -20px 0 0 60px;
`;

export default SmallTweet;
