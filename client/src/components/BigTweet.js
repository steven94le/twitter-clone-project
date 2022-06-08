import React from "react";
import styled from "styled-components";
import TweetActions from "./TweetActions";

const BigTweet = ({ tweet, isPending, error }) => {
  return tweet ? (
    <>
      <link to={`/tweet/${tweet.id}`} />
      <TweetHeader>
        <TweetAvatar src={tweet.author.avatarSrc} />
        <div>{tweet.author.displayName}</div>
        <div>@{tweet.author.handle}</div>
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
        <div>{tweet.timestamp} - Critter web app</div>
      </TweetContent>
      <TweetActions />
    </>
  ) : (
    <>
      {isPending && <StyledLoadPara>Loading...</StyledLoadPara>}
      {/* {error && <link to="/error" />} */}
      {error && <StyledLoadPara>{error}</StyledLoadPara>}
    </>
  );
};

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

const StyledLoadPara = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default BigTweet;
