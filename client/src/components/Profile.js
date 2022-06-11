import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { GoLocation, GoCalendar } from "react-icons/go";
import { useParams, useHistory } from "react-router-dom";
import TweetFeed from "./TweetFeed";

import CircularProgress from "@material-ui/core/CircularProgress";

const Profile = () => {
  const { profileId } = useParams();
  const [user, setUser] = useState(null);
  const [userFeed, setUserFeed] = useState(null);
  const [userPending, setUserPending] = useState(true);
  const [userFeedPending, setUserFeedPending] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => {
        // console.log("profile res", res);
        if (!res.ok) {
          throw Error("Could not fetch profile data");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setUserPending(false);
      })
      .catch(() => {
        setUserPending(false);
        history.push("/error");
      });
  }, [profileId, history]);

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch profile feed data");
        }
        return res.json();
      })
      .then((data) => {
        setUserFeed(data);
        setUserFeedPending(false);
      })
      .catch(() => {
        setUserFeedPending(false);
        history.push("/error");
      });
  }, [profileId, history]);

  return user ? (
    <Wrapper>
      <Banner src={user.profile.bannerSrc} alt="banner" />
      <>
        <Avatar src={user.profile.avatarSrc} alt="avatar" />
      </>
      {user.profile.isBeingFollowedByYou ? (
        <Following>Following</Following>
      ) : null}
      <DisplayName>{user.profile.displayName}</DisplayName>
      <Handle>@{user.profile.handle}</Handle>

      {user.profile.isFollowingYou ? (
        <FollowsYou>"Follows You"</FollowsYou>
      ) : null}

      <Bio>{user.profile.bio}</Bio>
      <div>
        <GoLocation />
        {user.profile.location}
        <div>
          <GoCalendar />
          Joined {format(new Date(user.profile.joined), "MMMM yyyy")}
        </div>
      </div>
      <div>
        {user.profile.numFollowing} Following {user.profile.numFollowers}{" "}
        Followers
      </div>
      <>
        <div>Tweet</div>
        <div>Media</div>
        <div>Likes</div>
      </>

      {userFeed ? (
        <TweetFeed userFeed={userFeed} feedPending={userFeedPending} />
      ) : (
        <>
          {userFeedPending && (
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
    </Wrapper>
  ) : (
    <>
      {userPending && (
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

const Wrapper = styled.div`
  width: 500px;
`;
const Banner = styled.img`
  height: 200px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: 2px solid white;
  margin-top: -60px;
  margin-left: 20px;
`;

const Following = styled.button`
  border-radius: 15px;
  color: white;
  background-color: purple;
`;

const DisplayName = styled.div`
  font-weight: bold;
`;

const Handle = styled.div`
  color: grey;
`;

const FollowsYou = styled.p`
  background-color: grey;
  border-radius: 10px;
`;

const Bio = styled.div`
  padding: 10px 0 10px 0;
`;

export default Profile;
