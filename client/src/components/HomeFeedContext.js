import React, { useState, createContext, useEffect } from "react";
import ErrorPage from "./ErrorPage";

export const HomeFeedContext = createContext(null);

export const HomeFeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  const [feedPending, setFeedPending] = useState(true);
  const [error, setError] = useState(null);

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
        setError(null);
      })
      .catch((err) => {
        setFeedPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {feedPending && <p>Homepage Loading...</p>}
      {error && <ErrorPage />}
      {feed && (
        <HomeFeedContext.Provider value={{ feed, feedPending }}>
          {children}
        </HomeFeedContext.Provider>
      )}
    </div>
  );
};

// const StyledLoadPara = styled.p`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
