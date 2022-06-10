import React, { useContext } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import { CurrentUserContext } from "./CurrentUserContext";
import TextArea from "./TextArea";

import SmallTweet from "./SmallTweet";

const HomeFeed = () => {
  const { feed, feedPending, feedError } = useContext(HomeFeedContext);
  const { currentUser, currentUserPending } = useContext(CurrentUserContext);

  return currentUser ? (
    <>
      <div>Home</div>
      <div>User Avatar</div>
      <TextArea />
      <SmallTweet
        userFeed={feed}
        feedPending={feedPending}
        feedError={feedError}
      />
    </>
  ) : (
    <>{currentUserPending && <p>Current User Loading...</p>}</>
  );
};

export default HomeFeed;
