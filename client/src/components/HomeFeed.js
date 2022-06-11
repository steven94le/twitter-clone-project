import React, { useContext } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import { CurrentUserContext } from "./CurrentUserContext";
import TextArea from "./TextArea";

import TweetFeed from "./TweetFeed";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";

const HomeFeed = () => {
  const { feed, feedPending, feedError } = useContext(HomeFeedContext);
  const { currentUser, currentUserPending, currentUserError } =
    useContext(CurrentUserContext);

  const history = useHistory();

  if (currentUserError || feedError === true) {
    history?.push("/error");
  }

  return currentUser ? (
    <>
      <h2>Home</h2>
      <div>User Avatar</div>
      <TextArea />
      {feed ? (
        <TweetFeed userFeed={feed} feedPending={feedPending} />
      ) : (
        <>
          {feedPending && (
            <CircularProgress
              style={{
                color: "blue",
                position: "fixed",
                top: "50%",
                left: "50%",
              }}
            />
          )}
        </>
      )}
    </>
  ) : (
    <>
      {currentUserPending && (
        <CircularProgress
          style={{
            color: "blue",
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
        />
      )}
    </>
  );
};

export default HomeFeed;
