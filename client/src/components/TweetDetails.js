import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BigTweet from "./BigTweet";
// import { Redirect } from "react-router-dom";

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => {
        console.log("res", res);
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setTweet(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [tweetId]);

  return (
    <>
      {isPending && <StyledLoadPara>Loading...</StyledLoadPara>}
      {/* {error && <Redirect to="/error" />} */}
      {error && <StyledLoadPara>{error}</StyledLoadPara>}
      <BigTweet tweet={tweet} />
    </>
  );
};

export default TweetDetails;

const StyledLoadPara = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
