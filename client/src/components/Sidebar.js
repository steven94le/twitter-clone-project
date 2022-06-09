import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import catLogoSvg from "../assets/logo.svg";
import { COLORS } from "../constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <StyledDiv>
      <StyledNav>
        <StyledCatLogo src={catLogoSvg} alt="twitter cat logo" />
        <NavBarList>
          <NavBarItem>
            <StyledLink exact to="/">
              <FiHome size={"24px"} style={{ paddingRight: "20px" }} />
              Home
            </StyledLink>
          </NavBarItem>
          <NavBarItem>
            <StyledLink to={`/profile/${currentUser.profile.handle}`}>
              <FiUser size={"24px"} style={{ paddingRight: "20px" }} />
              Profile
            </StyledLink>
          </NavBarItem>
          <NavBarItem>
            <StyledLink to="/notifications">
              <FiBell size={"24px"} style={{ paddingRight: "20px" }} />
              Notifications
            </StyledLink>
          </NavBarItem>
          <NavBarItem>
            <StyledLink to="/bookmarks">
              <FiBookmark size={"24px"} style={{ paddingRight: "20px" }} />
              Bookmarks
            </StyledLink>
          </NavBarItem>
        </NavBarList>
      </StyledNav>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: fixed;
  height: 100%;
  width: 160px;
  top: 0;
  left: 0;
`;

const StyledNav = styled.nav`
  margin: 20px 0 0 80px;
`;

const StyledCatLogo = styled.img`
  margin-left: 20px;
  height: 75px;
  width: 75px;
`;

const NavBarList = styled.ul`
  list-style-type: none;
`;

const NavBarItem = styled.li`
  padding: 15px 0 15px 0;
  width: 150px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active,
  &:hover {
    color: ${COLORS.primary};
  }

  &:hover {
    background-color: pink;
    border-radius: 10px;
  }
`;

export default Sidebar;
