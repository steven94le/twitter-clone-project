import React from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

const TweetActions = () => {
  return (
    <Wrapper>
      <FiMessageCircle size={"24px"} />
      <FiRepeat size={"24px"} />
      <FiHeart size={"24px"} />
      <FiShare size={"24px"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 0 10px 60px;
  width: 500px;

  & :not(:first-child) {
    margin-left: 75px;
  }
`;

export default TweetActions;
