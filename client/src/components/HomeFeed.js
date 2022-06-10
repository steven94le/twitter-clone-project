import React, { useContext } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import { CurrentUserContext } from "./CurrentUserContext";
import TextArea from "./TextArea";

import SmallTweet from "./SmallTweet";
import CircularProgress from "@material-ui/core/CircularProgress";

const HomeFeed = () => {
  const { feed, feedPending } = useContext(HomeFeedContext);
  const { currentUser, currentUserPending } = useContext(CurrentUserContext);

  return currentUser ? (
    <>
      <h2>Home</h2>
      <div>User Avatar</div>
      <TextArea />
      {feed ? (
        <SmallTweet userFeed={feed} feedPending={feedPending} />
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
