import React from "react";

//logos, styles
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";
import styled from "styled-components";

const TweetActions = ({ numOfLikes, onClickFunc }) => {
  return (
    <Wrapper>
      <FiMessageCircle size={"24px"} />
      <FiRepeat size={"24px"} />
      <FiHeart size={"24px"} onClick={onClickFunc} />
      <LikeCounter>{numOfLikes > 0 ? numOfLikes : null}</LikeCounter>
      <FiShare size={"24px"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 0 5px 0px;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: space-around;
  height: 36px;
`;

const LikeCounter = styled.div`
  position: absolute;
  margin: 0.5% 0 0 30%;
`;

export default TweetActions;
