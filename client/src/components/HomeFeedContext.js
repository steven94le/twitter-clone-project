import React, { useState, createContext, useEffect } from "react";
import styled from "styled-components";
// import { Redirect } from "react-router-dom";

export const HomeFeedContext = createContext(null);

export const HomeFeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  const [isPending, setIsPending] = useState(true);
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
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {isPending && <StyledLoadPara>Loading...</StyledLoadPara>}
      {/* {error && <Redirect to="/error" />} */}
      {error && <StyledLoadPara>{error}</StyledLoadPara>}
      {feed && (
        <HomeFeedContext.Provider value={{ feed, isPending }}>
          {children}
        </HomeFeedContext.Provider>
      )}
    </div>
  );
};

const StyledLoadPara = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
