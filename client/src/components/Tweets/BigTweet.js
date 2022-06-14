import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//components
import TweetActions from "../TweetActions/TweetActions";

//logo, styles
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import { format } from "date-fns";
import { FiArrowLeft } from "react-icons/fi";

const BigTweet = ({ props }) => {
  const { tweet, isPending } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [numOfLikes, setNumOfLikes] = useState(0);

  const history = useHistory();

  const handleToggleLike = (ev) => {
    if (isLiked) {
      setNumOfLikes(numOfLikes - 1);
    } else {
      setNumOfLikes(numOfLikes + 1);
    }
    setIsLiked(!isLiked);
    ev.stopPropagation();
  };

  const handleClick = () => {
    history.push("/");
  };

  return tweet ? (
    <Wrapper>
      <PageHeader>
        <StyledBackButton>
          <FiArrowLeft size={"20px"} onClick={handleClick} />
        </StyledBackButton>
        <StyledTitle>Meow</StyledTitle>
      </PageHeader>
      <TweetAvatar src={tweet.author.avatarSrc} />
      <TweetUserName>
        <TweetDisplayName>{tweet.author.displayName}</TweetDisplayName>
        <TweetHandle>@{tweet.author.handle}</TweetHandle>
      </TweetUserName>
      <TweetContent>
        <TweetText>{tweet.status}</TweetText>
        {tweet.media[0] ? (
          <TweetImg
            src={tweet.media[0].url}
            size={"24px"}
            alt="cat pic tweet"
          />
        ) : null}
        <TweetTimeStamp>
          {format(new Date(tweet.timestamp), "p · MMM d YYY")} · Critter web app
        </TweetTimeStamp>
        <StyledHr />
      </TweetContent>
      <TweetActions
        numOfLikes={numOfLikes}
        onClickFunc={handleToggleLike}
        isLiked={isLiked}
      />
    </Wrapper>
  ) : (
    <>
      {isPending && (
        <CircularProgress
          style={{
            color: "blue",
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
        />
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin: -20px 0 0 -28px;
  padding: 20px;
  width: 90%;
  border: lightgrey solid 0.1px;
`;

const PageHeader = styled.div`
  margin: -10px -20px 20px -20px;
  border: lightgrey solid 0.1px;
  padding: 15px;
`;

const StyledBackButton = styled.button`
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;
const StyledTitle = styled.div`
  position: absolute;
  top: 0px;
  margin: 15px 0 0 40px;
  font-size: 20px;
  font-weight: bold;
`;

const TweetAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding-right: 10px;
`;

const TweetUserName = styled.header`
  display: block;
  margin: -50px 0 40px 60px;
`;

const TweetDisplayName = styled.div`
  font-weight: bold;
`;

const TweetHandle = styled.div`
  color: grey;
`;

const TweetContent = styled.div`
  margin: -15px 0 10px 0;
`;

const TweetText = styled.div`
  font-size: 24px;
`;

const TweetImg = styled.img`
  width: 100%;
  margin: 20px 0 10px 0;
  border-radius: 15px;
`;

const TweetTimeStamp = styled.div`
  color: grey;

  margin-top: 10px;
`;

const StyledHr = styled.hr`
  margin-top: 20px;
  height: 1px;
  background-color: lightgrey;
  border: none;
`;

export default BigTweet;
