import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

const App = () => {
  return (
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
  );
};

export default App;
