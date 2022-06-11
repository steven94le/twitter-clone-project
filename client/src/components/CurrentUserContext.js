import React, { useState, createContext, useEffect } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserPending, setCurrentUserPending] = useState(true);
  const [currentUserError, setCurrentUserError] = useState(null);

  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch current user profile data");
        }
        return res.json();
      })
      .then((data) => {
        setCurrentUser(data);
        setCurrentUserPending(false);
      })
      .catch(() => {
        setCurrentUserPending(false);
        setCurrentUserError(true);
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, currentUserPending, currentUserError }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
