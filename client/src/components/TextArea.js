import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const TextArea = () => {
  const [tweetInput, setTweetInput] = useState("");
  const maxChar = 280;
  const charLimit = maxChar * 0.2;
  const charCounter = maxChar - tweetInput.length;

  const handleOnChange = (ev) => {
    setTweetInput(ev.target.value);
  };

  const handleSubmitTweet = (ev) => {
    ev.preventDefault();

    fetch(`/api/tweet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ tweetInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch(console.error);
  };

  return (
    <>
      <TweetTextArea
        type="text"
        placeholder="What's Happening"
        value={tweetInput}
        onChange={handleOnChange}
      />
      <TweetAction>
        <TweetCounter charCounter={charCounter} charLimit={charLimit}>
          {charCounter}
        </TweetCounter>
        <TweetButton
          type="submit"
          disabled={charCounter < 0 ? true : false}
          onClick={handleSubmitTweet}
        >
          Meow
        </TweetButton>
      </TweetAction>
      <div>{tweetInput}</div>
    </>
  );
};

const TweetTextArea = styled.textarea`
  border: 1px solid grey;
  outline: none;
  resize: none;
  width: 550px;
  height: 100px;
`;

const TweetAction = styled.div`
  display: flex;
  justify-content: right;
  width: 550px;
`;

const TweetCounter = styled.p`
  padding: 5px 10px 0 0;

  color: ${(props) =>
    0 <= props.charCounter && props.charCounter < props.charLimit
      ? "orange"
      : 0 > props.charCounter
      ? "red"
      : "grey"};
`;

const TweetButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 15px;
  font-size: 16px;

  &:disabled {
    background-color: grey;
  }
`;

export default TextArea;
