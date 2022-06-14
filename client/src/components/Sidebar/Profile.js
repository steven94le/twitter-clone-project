import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

//components
import TweetFeed from "../Tweets/TweetFeed";

//logos, styles
import CircularProgress from "@material-ui/core/CircularProgress";
import { GoLocation, GoCalendar } from "react-icons/go";
import styled from "styled-components";
import { format } from "date-fns";
import { COLORS } from "../../constants";

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
      <ProfileSection>
        <>
          <Avatar src={user.profile.avatarSrc} alt="avatar" />
        </>
        {user.profile.isBeingFollowedByYou ? (
          <Following>Following</Following>
        ) : null}
        <DisplayName>{user.profile.displayName}</DisplayName>
        <HandleLine>
          <Handle>@{user.profile.handle}</Handle>

          {user.profile.isFollowingYou ? (
            <FollowsYou>Follows You</FollowsYou>
          ) : null}
        </HandleLine>

        <Bio>{user.profile.bio}</Bio>
        <GeoDate>
          <GoLocation /> {user.profile.location} <GoCalendar /> Joined{" "}
          {format(new Date(user.profile.joined), "MMMM yyyy")}
        </GeoDate>
        <TweetMetrics>
          <MetricNumber>{user.profile.numFollowing}</MetricNumber> Following{" "}
          <MetricNumber>{user.profile.numFollowers} </MetricNumber>Followers
        </TweetMetrics>
        <>
          <TweetActivity>
            <TweetTab>Tweet</TweetTab>
            <MediaTab>Media</MediaTab>
            <LikesTab>Likes</LikesTab>
          </TweetActivity>
          <StyledDivLine />
        </>
      </ProfileSection>

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
  width: 75%;
  margin: -10px 0 0 -28px;
`;

const ProfileSection = styled.div`
  margin: -5px 0 0 0;
  border: lightgrey solid 0.1px;
  padding: 20px;
`;

const Banner = styled.img`
  width: 100%;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: 2px solid white;
  margin-top: -60px;
`;

const Following = styled.button`
  border-radius: 20px;
  color: white;
  background-color: ${COLORS.primary};
  position: absolute;
  left: 70%;
  padding: 10px;
  font-weight: bold;
  border: none;
  width: 90px;
`;

const DisplayName = styled.div`
  font-weight: bold;
  padding-top: 10px;
`;

const HandleLine = styled.div`
  display: flex;
`;

const Handle = styled.div`
  color: grey;
`;

const FollowsYou = styled.p`
  background-color: lightgrey;
  width: 75px;
  height: 15px;
  margin: 3px 0 0 10px;
  font-size: 12px;
  padding: 1px;
  border-radius: 10px;
  text-align: center;
  color: grey;
`;

const Bio = styled.div`
  padding: 10px 0 10px 0;
`;

const GeoDate = styled.div`
  display: inline;
  & :not(:first-child) {
    margin-left: 20px;
  }
`;

const TweetMetrics = styled.div`
  padding: 10px 0 0 0;
  & :not(:first-child) {
    margin-left: 20px;
  }
`;

const MetricNumber = styled.span`
  font-weight: bold;
`;

const TweetActivity = styled.div`
  padding: 25px 0 25px 0;
  margin: 0 -21px -20px -21px;
  display: flex;
  justify-content: space-around;
  & :not(:first-child) {
    color: grey;
  }
  position: relative;
`;
const TweetTab = styled.button`
  color: ${COLORS.primary};
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const MediaTab = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const LikesTab = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const StyledDivLine = styled.div`
  border: 2px ${COLORS.primary} solid;
  position: absolute;
  margin: 18px 0 0 -20px;
  width: 20%;
`;

export default Profile;
