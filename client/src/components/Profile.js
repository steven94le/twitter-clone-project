import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { GoLocation, GoCalendar } from "react-icons/go";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import SmallTweet from "./SmallTweet";

const Profile = () => {
  // const { currentUser } = useContext(CurrentUserContext);
  // console.log("currentUser", currentUser);
  const { profileId } = useParams();
  const [user, setUser] = useState(null);
  const [userFeed, setUserFeed] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => {
        // console.log("profile res", res);
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [profileId]);

  // console.log("user", user);

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setUserFeed(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [profileId]);

  return user && userFeed ? (
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
      <SmallTweet userFeed={userFeed} isPending={isPending} error={error} />
    </Wrapper>
  ) : (
    <>
      {isPending && <StyledLoadPara>Loading...</StyledLoadPara>}
      {error && <ErrorPage />}
    </>
  );
};

export default Profile;

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

const StyledLoadPara = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
