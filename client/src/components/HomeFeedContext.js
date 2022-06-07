import React, { useState, createContext, useEffect } from "react";

export const HomeFeedContext = createContext(null);

export const HomeFeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  const [feedStatus, setFeedStatus] = useState("loading");
  //   const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // setIsLoaded(false);
    // console.log("isLoaded", isLoaded);

    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        // setIsLoaded(true);
        setFeed(data);
        setFeedStatus("idle");
      });
  }, []);

  //   console.log("isLoaded", isLoaded);

  return (
    <HomeFeedContext.Provider value={{ feed, feedStatus }}>
      {children}
    </HomeFeedContext.Provider>
  );
};
