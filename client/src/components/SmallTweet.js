import React, { useContext } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";
import TweetActions from "./TweetActions";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";

const SmallTweet = () => {
  const { feed } = useContext(HomeFeedContext);
  console.log("feed", feed);
  const history = useHistory();

  //conditional chaining
  //add index to map param to add onto wrapper key
  return feed?.tweetIds.map((tweetId) => {
    const tweet = feed.tweetsById[tweetId];
    // console.log("tweet", tweet);

    const handleClick = () => {
      history.push(`/tweet/${tweetId}`);
    };

    return (
      <Wrapper key={`${tweetId}`} onClick={handleClick}>
        <TweetHeader>
          <TweetAvatar src={tweet.author.avatarSrc} />
          <div>{tweet.author.displayName}</div>
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
        <TweetActions />
      </Wrapper>
    );
  });
};

const Wrapper = styled.div`
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
    border: 0.1px blue solid;
  }
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
