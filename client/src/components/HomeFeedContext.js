import React, { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const HomeFeedContext = createContext(null);

export const HomeFeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  const [feedPending, setFeedPending] = useState(true);

  const history = useHistory();

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => {
        // console.log("res", res);
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setFeed(data);
        setFeedPending(false);
      })
      .catch(() => {
        setFeedPending(false);
        history.push("/error");
      });
  }, [history]);

  return (
    <div>
      <HomeFeedContext.Provider value={{ feed, feedPending }}>
        {children}
      </HomeFeedContext.Provider>
    </div>
  );
};
