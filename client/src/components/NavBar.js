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

        {/* if user is authenticated/signed in, we see their avatar on navbar */}
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
  border: 1.5px solid black;
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
  margin-top: 3px; 
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
  width: 2vw;
  height: auto;
  object-fit: contain;
  margin-top: 15px;
  margin-right: 1vw;
  border: 1px solid black; 
  border-radius: 50%;
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

  &:hover {
    background-color: white;
    color: black;
    box-shadow: 2px 4px 7px 0px rgba(0, 0, 0, 2);
  }
`;
