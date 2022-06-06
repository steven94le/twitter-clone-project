import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import catLogoSvg from "../assets/logo.svg";
import { COLORS } from "../constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";

const Sidebar = () => {
  return (
    <StyledDiv>
      <StyledNav>
        <NavBarList>
          <img src={catLogoSvg} alt="twitter cat logo" />
          <NavBarItem>
            <StyledLink to="/">
              <FiHome size={"24px"} style={{ paddingRight: "20px" }} />
              Home
            </StyledLink>
          </NavBarItem>
          <NavBarItem>
            {/* update dummy profile link */}
            <StyledLink to="/profile/abc">
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
  margin-left: 100px;
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

  &.active {
    color: ${COLORS.primary};
  }
  &:hover {
    background-color: pink;
    border-radius: 10px;
  }
`;

export default Sidebar;
