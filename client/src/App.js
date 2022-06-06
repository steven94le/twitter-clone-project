import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

import { CurrentUserContext } from "./components/CurrentUserContext";

const App = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  console.log("currentUser", currentUser);
  console.log("status", status);

  return (
    <>
      {status === "loading" ? (
        //update loading message/screen
        <p>Loading...</p>
      ) : (
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

export default App;
