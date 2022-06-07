import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { COLORS } from "./constants";

import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

import { CurrentUserContext } from "./components/CurrentUserContext";
// import { HomeFeedContext } from "./components/HomeFeedContext";

const App = () => {
  const { status } = useContext(CurrentUserContext);
  // console.log("currentUser", currentUser);
  // console.log("status", status);

  return (
    <>
      {status === "loading" ? (
        //update loading message/screen
        <StyledLoadPara>Loading...</StyledLoadPara>
      ) : (
        <>
          <GlobalStyles />
          <StyledDiv>
            <Router>
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  <div>Home</div>
                  <div>
                    <div>User Avatar</div>
                    <StyledTextArea placeholder="What's Happening" />
                  </div>
                  <TextAreaActionArea>
                    <div>Counter</div>
                    <TextAreaButton>Meow</TextAreaButton>
                  </TextAreaActionArea>
                  <HomeFeed />
                </Route>
                <Route exact path="/notifications">
                  <Notifications />
                </Route>
                <Route exact path="/bookmarks">
                  <Bookmarks />
                </Route>
                <Route exact path="/tweet/:tweetId">
                  <TweetDetails />
                </Route>
                <Route exact path="/:profileId">
                  <Profile />
                </Route>
              </Switch>
            </Router>
          </StyledDiv>
        </>
      )}
    </>
  );
};

const StyledDiv = styled.div`
  margin-left: 300px;
`;

const StyledLoadPara = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledTextArea = styled.textarea`
  border: 1px solid grey;
  outline: none;
  resize: none;
  width: 550px;
  height: 100px;
`;

const TextAreaActionArea = styled.div`
  display: flex;
  justify-content: right;
  width: 550px;
`;

const TextAreaButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 15px;
  font-size: 16px;
`;

export default App;
