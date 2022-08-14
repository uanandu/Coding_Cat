import { useContext } from "react"; // from react
import { NavLink } from "react-router-dom"; // from react-router-dom

import styled from "styled-components"; // from styled-components

import { useAuth0 } from "@auth0/auth0-react"; // from auth0

import { UserContext } from "../context/UserContext"; // from context

import catimage from "../assets/Coding Cat-logos_transparent.png"; // for default logo

// NavBar component for the user
export const NavBar = () => {
  const { isAuthenticated } = useAuth0(); // get user info from auth0

  const { userInfo } = useContext(UserContext); // get user info from context

  return (
    <Wrapper>
      <Logo to="/">
        <LogoImage src={catimage} />
      </Logo>
      {isAuthenticated && (
        <>
          <UserAccount to={`/members/landing`}>
            <NavButton>MEMBER AREA</NavButton>
          </UserAccount>
        </>
      )}

      {isAuthenticated && (
        <>
          <UserAccount to={`/members/profile`}>
            <UserAvatar src={userInfo.avatar} />
          </UserAccount>
        </>
      )}
    </Wrapper>
  );
};

//styled-components

const Wrapper = styled.div`
  position: fixed;
  background-color: white;
  height: 5vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;
  z-index: 30;
  border-bottom: 1.5px solid black;
`;

const Logo = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 2rem;
  font-style: italic;
  font-weight: 800;
  margin-top: 10px;
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
  position: relative;
  width: 4vh;
  height: auto;
  object-fit: contain;
  margin-top: 10px;
  margin-right: 3.5vw;
`;

const LoginButton = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
  border: 1px solid #000;
  padding: 10px;
`;
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
`;
