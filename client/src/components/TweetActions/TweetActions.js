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
      {numOfLikes > 0 ? numOfLikes : null}
      <FiShare size={"24px"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px 0 10px 60px;

  & :not(:first-child) {
    margin-left: 20%;
  }
`;

export default TweetActions;
