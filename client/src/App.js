import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Sidebar from "./components/Sidebar/Sidebar";
import HomeFeed from "./components/Sidebar/HomeFeed";
import Notifications from "./components/Sidebar/Notifications";
import Bookmarks from "./components/Sidebar/Bookmarks";
import TweetDetails from "./components/Tweets/TweetDetails";
import Profile from "./components/Sidebar/Profile";
import ErrorPage from "./components/Sidebar/ErrorPage";

//styles
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledDiv>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/">
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
            <Route exact path="/error">
              <ErrorPage />
            </Route>
            <Route exact path="/profile/:profileId">
              <Profile />
            </Route>
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
