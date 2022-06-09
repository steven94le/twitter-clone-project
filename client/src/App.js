import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

import TextArea from "./components/TextArea";

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
                <TextArea />
              </div>
              <HomeFeed />
            </Route>
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/bookmarks" component={Bookmarks} />
            <Route exact path="/tweet/:tweetId" component={TweetDetails} />
            <Route exact path="/error" component={ErrorPage} />
            <Route exact path="/profile/:profileId" component={Profile} />
          </Switch>
        </Router>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  margin-left: 300px;
`;

export default App;
