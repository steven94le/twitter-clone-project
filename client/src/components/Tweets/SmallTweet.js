import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//components
import TweetActions from "../TweetActions/TweetActions";

//styles
import styled from "styled-components";
import { format } from "date-fns";

const SmallTweet = ({ props }) => {
  const { userFeed, tweetId, tweet } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLikes, setNumOfLikes] = useState(tweet.numLikes);

  const history = useHistory();

  const handleClick = (ev) => {
    history.push(`/tweet/${tweetId}`);
    ev.stopPropagation();
  };

  const handleToggleLike = (ev) => {
    if (isLiked) {
      setNumOfLikes(numOfLikes - 1);
    } else {
      setNumOfLikes(numOfLikes + 1);
    }
    setIsLiked(!isLiked);
    ev.stopPropagation();
  };

  return (
    userFeed && (
      <Wrapper>
        <div onClick={handleClick}>
          <TweetHeader>
            <TweetAvatar src={tweet.author.avatarSrc} />
            <TweetDisplayName
              to={`/profile/${tweet.author.handle}`}
              onClick={(ev) => ev.stopPropagation()}
            >
              {tweet.author.displayName}
            </TweetDisplayName>
            <div> @{tweet.author.handle} </div>
            <span> {"·"}</span>
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
        <TweetActions
          numOfLikes={numOfLikes}
          onClickFunc={handleToggleLike}
          isLiked={isLiked}
        />
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  padding: 20px 20px 0 20px;
  color: black;
  border: lightgrey solid 0.1px;
  &:hover {
    cursor: pointer;
  }
`;

const TweetHeader = styled.header`
  display: flex;
  & :not(:first-child) {
    margin-right: 5px;
  }
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
  width: 95%;
  margin-top: 20px;
  border-radius: 15px;
`;

const TweetContent = styled.div`
  margin: -20px 0 0 60px;
`;

export default SmallTweet;
