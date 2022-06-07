import React from "react";
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
import ErrorPage from "./components/ErrorPage";

// import { CurrentUserContext } from "./components/CurrentUserContext";
// import { HomeFeedContext } from "./components/HomeFeedContext";

const App = () => {
  return (
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
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/bookmarks" component={Bookmarks} />
            <Route exact path="/tweet/:tweetId" component={TweetDetails} />
            <Route exact path="/error" component={ErrorPage} />
            <Route exact path="/:profileId" component={Profile} />
          </Switch>
        </Router>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  margin-left: 300px;
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
