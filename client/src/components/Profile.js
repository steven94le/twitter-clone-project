import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import styled from "styled-components";
import { format } from "date-fns";

import { GoLocation, GoCalendar } from "react-icons/go";

//GET /api/:handle/profile
// Fetch the information for a specific user. Returns data in the same shape as /api/me/profile.

// If the user handle supplied does not exist, it returns a 404 error of user-not-found.

const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("currentUser", currentUser);

  return (
    <Wrapper>
      <Banner src={currentUser.profile.bannerSrc} alt="banner" />
      <>
        <Avatar src={currentUser.profile.avatarSrc} alt="avatar" />
      </>
      {currentUser.profile.isBeingFollowedByYou ? (
        <Following>Following</Following>
      ) : null}
      <DisplayName>{currentUser.profile.displayName}</DisplayName>
      <Handle>@{currentUser.profile.handle}</Handle>

      {currentUser.profile.isFollowingYou ? (
        <FollowsYou>"Follows You"</FollowsYou>
      ) : null}

      <Bio>{currentUser.profile.bio}</Bio>
      <div>
        <GoLocation />
        {currentUser.profile.location}
        <div>
          <GoCalendar />
          Joined {format(new Date(currentUser.profile.joined), "MMMM yyyy")}
        </div>
      </div>
      <div>
        {currentUser.profile.numFollowing} Following{" "}
        {currentUser.profile.numFollowers} Followers
      </div>
      <>
        <div>Tweet</div>
        <div>Media</div>
        <div>Likes</div>
      </>
    </Wrapper>
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
