import React, { useContext } from "react";
import { HomeFeedContext } from "./HomeFeedContext";

import SmallTweet from "./SmallTweet";

const HomeFeed = () => {
  const { feed, isPending, error } = useContext(HomeFeedContext);
  return (
    <>
      <SmallTweet userFeed={feed} isPending={isPending} error={error} />
    </>
  );
};

export default HomeFeed;
