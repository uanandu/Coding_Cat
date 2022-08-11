import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { UserContext } from "../context/UserContext";

import catimage from "../assets/Coding Cat-logos_transparent.png";

export const NavBar = () => {

  const {
    isAuthenticated
  } = useAuth0();

  const { userInfo } = useContext(UserContext);

  return (
    <Wrapper>
      <Logo to="/">
        <LogoImage src={catimage} />
      </Logo>
      {
        isAuthenticated ? (
          <>
            <UserAccount to={`/members/landing`}>
              <NavButton>MEMBER AREA</NavButton>
            </UserAccount>
          </>
        ) : (
          <></>
        )
      }

      {isAuthenticated ? (
        <>
          <UserAccount to={`/members/profile`}>
            <UserAvatar src={catimage} />
          </UserAccount>
        </>
      ) : (
        <>
        </>
      )}
    </Wrapper>
  );
};

//styled-components

const Wrapper = styled.div`
  background-color: #f5f5f5;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;
`;

const Logo = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 2rem;
  font-style: italic;
  font-weight: 800;
`;
const LogoImage = styled.img`
  width: 7vh;
  height: auto;
  object-fit: contain;
`;

const UserAccount = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 2rem;
  font-style: italic;
  font-weight: 800;
`;
const UserAvatar = styled.img`
  width: 7vh;
  height: auto;
  object-fit: contain;
`;

const LoginButton = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    border: 1px solid #000;
    padding: 10px;
`
const NavButton = styled.button`
    background-color: black;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1em;
    font-weight: bold;
    color: white;
    margin: 10px;
    transition: 1s ease-in-out;
    cursor: pointer;
`