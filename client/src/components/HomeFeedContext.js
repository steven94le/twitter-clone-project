import React, { useState, createContext, useEffect } from "react";

export const HomeFeedContext = createContext(null);

export const HomeFeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  const [feedPending, setFeedPending] = useState(true);
  const [feedError, setFeedError] = useState(null);

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch home feed data");
        }
        return res.json();
      })
      .then((data) => {
        setFeed(data);
        setFeedPending(false);
      })
      .catch(() => {
        setFeedPending(false);
        setFeedError(true);
      });
  }, []);

  return (
    <div>
      <HomeFeedContext.Provider value={{ feed, feedPending, feedError }}>
        {children}
      </HomeFeedContext.Provider>
    </div>
  );
};
