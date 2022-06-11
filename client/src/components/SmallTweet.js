import React from "react";
import styled from "styled-components";
import TweetActions from "./TweetActions";
import { Link, useHistory } from "react-router-dom";
import { format } from "date-fns";

const SmallTweet = ({ userFeed }) => {
  const history = useHistory();

  return userFeed?.tweetIds.map((tweetId, index) => {
    const tweet = userFeed?.tweetsById[tweetId];

    const handleClick = (ev) => {
      history.push(`/tweet/${tweetId}`);
      ev.stopPropagation();
    };

    return (
      userFeed && (
        <Wrapper key={`${tweetId.id}-${index}`}>
          <div onClick={handleClick}>
            <TweetHeader>
              <TweetAvatar src={tweet.author.avatarSrc} />

              <TweetDisplayName
                to={`/profile/${tweet.author.handle}`}
                onClick={(ev) => ev.stopPropagation()}
              >
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
          </div>
          <TweetActions />
        </Wrapper>
      )
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
