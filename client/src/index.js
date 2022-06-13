import React from "react";
import ReactDOM from "react-dom/";
import App from "./App";

//contexts
import { CurrentUserProvider } from "./components/CurrentUserContext";
import { HomeFeedProvider } from "./components/HomeFeedContext";

const root = document.getElementById("root");
ReactDOM.render(
  <CurrentUserProvider>
    <HomeFeedProvider>
      <App />
    </HomeFeedProvider>
  </CurrentUserProvider>,
  root
);
