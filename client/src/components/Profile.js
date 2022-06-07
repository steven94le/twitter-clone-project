import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import styled from "styled-components";

//GET /api/:handle/profile
// Fetch the information for a specific user. Returns data in the same shape as /api/me/profile.

// If the user handle supplied does not exist, it returns a 404 error of user-not-found.

// GET /api/:handle/following
// Returns an array of user profiles that the specified user is following.

// GET /api/:handle/followers
// Same as /api/:handle/following, but shows the user's followers (people who follow the user,
// instead of people that the user follows).

// PUT /api/:handle/follow
// Follow the specified user, for the currently-logged-in user.

// If you are already following this user, you'll get a "409 Conflict" error; you want to use the /unfollow endpoint instead.

// If all goes well, you should receive the following response:

// {
//   "success": true
// }

// PUT /api/:handle/unfollow
// Stop following the specified user, for the currently-logged-in user.

// If you are not following this user, you'll get a "409 Conflict" error; you want to use the /follow endpoint instead.

// If all goes well, you should receive the following response:

// {
//   "success": true
// }

const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("currentUser", currentUser);

  return (
    <>
      <ProfileBanner src={currentUser.profile.bannerSrc} alt="profile banner" />
      <ProfileAvatar src={currentUser.profile.avatarSrc} alt="profile avatar" />

      {currentUser.profile.isBeingFollowedByYou ? (
        <button>Following</button>
      ) : null}
      <div>{currentUser.profile.displayName}</div>
      <div>@{currentUser.profile.handle}</div>
      {currentUser.profile.isFollowingYou ? "Follows You" : null}
      <div>{currentUser.profile.bio}</div>
      <div>{currentUser.profile.location}</div>
      <div>Joined {currentUser.profile.joined}</div>
      <div>{currentUser.profile.numFollowing} Following</div>
      <div>{currentUser.profile.numFollowers} Followers</div>
    </>
  );
};

export default Profile;

const ProfileBanner = styled.img`
  width: 500px;
  height: 200px;
`;

const ProfileAvatar = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;
