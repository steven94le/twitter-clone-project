import React, { useContext } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import { CurrentUserContext } from "./CurrentUserContext";
import TextArea from "./TextArea";

import SmallTweet from "./SmallTweet";

const HomeFeed = () => {
  const { feed, feedPending, error } = useContext(HomeFeedContext);
  // const { currentUser, currentUserPending } = useContext(CurrentUserContext);

  return (
    <>
      <div>Home</div>
      <div>User Avatar</div>
      <TextArea />
      <SmallTweet userFeed={feed} isPending={feedPending} error={error} />
    </>
  );
};

export default HomeFeed;
