import React from "react";

//logos, styles
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";
import styled from "styled-components";

const TweetActions = ({ numOfLikes, onClickFunc, isLiked }) => {
  return (
    <Wrapper>
      <FiMessageCircle size={"24px"} />
      <FiRepeat size={"24px"} />
      {isLiked ? <StyledHeart /> : null}
      <FiHeart size={"24px"} onClick={onClickFunc} style={{ zIndex: "2" }} />
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
  margin: 0.5% 0 0 32%;
`;

const StyledHeart = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin: -0.5% 0 0 25%;
  background-color: red;
  z-index: 1;
  opacity: 0.3;
`;

export default TweetActions;
