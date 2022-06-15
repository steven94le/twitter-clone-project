import React, { useState } from "react";

//styles
import { COLORS } from "../../constants";
import styled from "styled-components";

const TextArea = () => {
  const [tweetState, setTweetState] = useState("");
  const [tweetInput, setTweetInput] = useState("");
  const maxChar = 280;
  const charLimit = maxChar * 0.2;
  const charCounter = maxChar - tweetInput.length;

  const handleOnChange = (ev) => {
    ev.preventDefault();
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
      body: JSON.stringify({ status: tweetInput }),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setTweetState(data.message);
        window.location.reload();
      })
      .catch((err) => {
        window.alert("Tweet attempt failed! Please try again.");
      });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmitTweet}>
        <TweetTextArea
          type="text"
          placeholder="What's happening"
          value={tweetInput}
          onChange={handleOnChange}
        />
        <TweetAction>
          <TweetCounter charCounter={charCounter} charLimit={charLimit}>
            {charCounter}
          </TweetCounter>
          <TweetButton type="submit" disabled={charCounter < 0 ? true : false}>
            Meow
          </TweetButton>
        </TweetAction>
      </form>
      <>{tweetState}</>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: lightgrey solid 0.1px;
  border-bottom: lightgrey solid 10px;
  padding: 10px 0 10px;
`;

const TweetTextArea = styled.textarea`
  outline: none;
  resize: none;
  margin-left: 80px;
  padding-top: 20px;
  width: 85%;
  height: 100px;
  border: none;
  font-size: 18px;
  font-family: sans-serif;
`;

const TweetAction = styled.div`
  display: flex;
  justify-content: right;
  width: 95%;
`;

const TweetCounter = styled.p`
  padding: 0px 10px 0 0;

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
  border-radius: 25px;
  font-size: 16px;
  width: 75px;
  height: 40px;
  margin-top: 5px;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export default TextArea;
