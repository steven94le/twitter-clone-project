import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//components
import TextArea from "../TweetActions/TextArea";
import TweetFeed from "../Tweets/TweetFeed";

//contexts
import { HomeFeedContext } from "../HomeFeedContext";
import { CurrentUserContext } from "../CurrentUserContext";

//logo, styles
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const HomeFeed = () => {
  const { feed, feedPending, feedError } = useContext(HomeFeedContext);
  const { currentUser, currentUserPending, currentUserError } =
    useContext(CurrentUserContext);

  const history = useHistory();

  if (currentUserError || feedError === true) {
    history?.push("/error");
  }

  return currentUser ? (
    <Wrapper>
      <StyledHeader>Home</StyledHeader>
      <Avatar src={currentUser.profile.avatarSrc} />
      <TextArea />
      {feed ? (
        <TweetFeed userFeed={feed} feedPending={feedPending} />
      ) : (
        <>
          {feedPending && (
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
      )}
    </Wrapper>
  ) : (
    <>
      {currentUserPending && (
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
  width: 75%;
`;

const StyledHeader = styled.h2`
  border: lightgrey solid 0.1px;
  margin: -10px 0 0 -28px;
  padding: 20px 0 20px 20px;
`;

const Avatar = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 20px 10px 0 0px;
  margin-left: -5px;
`;

export default HomeFeed;
