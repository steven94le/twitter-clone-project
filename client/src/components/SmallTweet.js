import React from "react";

import styled from "styled-components";
import TweetActions from "./TweetActions";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const SmallTweet = ({ userFeed, feedPending, feedError }) => {
  return userFeed?.tweetIds.map((tweetId, index) => {
    const tweet = userFeed.tweetsById[tweetId];
    // console.log("tweet", tweet);

    return userFeed ? (
      <Wrapper key={`${tweetId.id}-${index}`}>
        <StyledLink to={`/tweet/${tweetId}`}>
          <TweetHeader>
            <TweetAvatar src={tweet.author.avatarSrc} />
            <TweetDisplayName to={`/profile/${tweet.author.handle}`}>
              {tweet.author.displayName}
            </TweetDisplayName>
            <div>@{tweet.author.handle}</div>
            <div>{format(new Date(tweet.timestamp), "MMM do")}</div>
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
        </StyledLink>
        <TweetActions />
      </Wrapper>
    ) : (
      <>{feedPending && <p>SmallTweet Loading...</p>}</>
    );
  });
};

const Wrapper = styled.div`
  margin-bottom: 30px;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
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

const TweetDisplayName = styled(Link)`
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
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
