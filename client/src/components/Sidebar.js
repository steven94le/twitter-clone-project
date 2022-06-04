import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import catLogoSvg from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <StyledDiv>
      <StyledNav>
        <NavBarList>
          <NavBarItem>
            {/* <svg
            xmlnssvg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
          > */}
            <img src={catLogoSvg} alt="cat logo svg" />
          </NavBarItem>
          <NavBarItem>
            <StyledLink to="/">Home</StyledLink>
          </NavBarItem>
          <NavBarItem>
            {/* update dummy profile link */}
            <StyledLink to="/profile/abc">Profile</StyledLink>
          </NavBarItem>
          <NavBarItem>
            <StyledLink to="/notifications">Notifications</StyledLink>
          </NavBarItem>
          <NavBarItem>
            <StyledLink to="/bookmarks">Bookmarks</StyledLink>
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
  border: 2px solid red;
`;

const StyledNav = styled.nav`
  margin-left: 100px;
`;

const NavBarList = styled.ul`
  list-style-type: none;
`;

const NavBarItem = styled.li`
  margin: 15px 0 15px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default Sidebar;
