import React, { useState, createContext, useEffect } from "react";
import ErrorPage from "./ErrorPage";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserPending, setCurrentUserPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setCurrentUser(data);
        setCurrentUserPending(false);
        setError(null);
      })
      .catch((err) => {
        setCurrentUserPending(false);
        setError(err.message);
      });
  }, []);
  //   console.log(currentUser);

  return (
    <>
      {currentUserPending && <p>Current User Loading...</p>}
      {error && <ErrorPage />}
      {currentUser && (
        <CurrentUserContext.Provider
          value={{ currentUser, currentUserPending }}
        >
          {children}
        </CurrentUserContext.Provider>
      )}
    </>
  );
};
