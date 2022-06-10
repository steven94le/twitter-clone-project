import React, { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserPending, setCurrentUserPending] = useState(true);
  const [currentUserError, setCurrentUserError] = useState(null);

  const history = useHistory();

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
        setCurrentUserError(null);
      })
      .catch((err) => {
        setCurrentUserPending(false);
        setCurrentUserError(err.message);
        history.push("/error");
      });
  }, [history]);
  //   console.log(currentUser);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, currentUserPending, currentUserError }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
