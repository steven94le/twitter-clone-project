import React from "react";

//logo, styles
import { FaBomb } from "react-icons/fa";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <FaBomb size={"64px"} />
      <h2>An unknown error has occurred.</h2>
      <p>
        Please try refreshing the page, or{" "}
        <StyledA href="/">contact support</StyledA> if the problem persists
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledA = styled.a`
  color: blue;
`;

export default ErrorPage;
