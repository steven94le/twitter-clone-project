import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

//context
import { CurrentUserContext } from "../CurrentUserContext";

//logos, styles
import styled from "styled-components";
import { COLORS } from "../../constants";
import catLogoSvg from "../../assets/logo.svg";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";

const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <StyledDiv>
      <StyledNav>
        <NavBarList>
          <StyledCatLogo src={catLogoSvg} alt="twitter cat logo" />
          <NavBarItem>
            <StyledLink exact to="/">
              <FiHome size={"24px"} style={{ paddingRight: "20px" }} />
              Home
            </StyledLink>
          </NavBarItem>
          <NavBarItem>
            <StyledLink to={`/profile/${currentUser?.profile.handle}`}>
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
  width: 280px;
  top: 0;
  left: 0;
  border-right: lightgrey solid 0.1px;
`;

const StyledNav = styled.nav`
  margin: 20px 0 0 60px;
`;

const StyledCatLogo = styled.img`
  height: 75px;
  width: 75px;
`;

const NavBarList = styled.ul`
  list-style-type: none;
  font-weight: bold;
`;

const NavBarItem = styled.li`
  padding: 15px 0 15px 0;
  width: 200px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 15px;
  border-radius: 25px;

  &.active {
    color: ${COLORS.primary};
  }

  &:hover {
    background-color: lavender;
  }
`;

export default Sidebar;
