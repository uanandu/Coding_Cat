import styled from "styled-components";
import { LoginButton } from "../helpers/LoginButton";
import { LogoutButton } from "../helpers/LogoutButton";
import { ErrorPage } from "./ErrorPage";
import { LoadingPage } from "../helpers/LoadingPage";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

export const Registration = () => {
  const { isAuthenticated, loginWithRedirect, logout, error, user, isLoading } =
    useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <LoadingPage />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <ErrorPage />
      </Wrapper>
    );
  }

  if (isAuthenticated) {
    return (
      <Wrapper>
        <WelcomeText>Hello {user.name} </WelcomeText>
        <InstructionText>
          You are logged in! You can now access the full application.
        </InstructionText>{" "}
        <RedirectButton to="/member">Set up profile</RedirectButton>
        <RedirectButton to="/members/landing">Go to Member Area</RedirectButton>
        <LogoutButton />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <InstructionText>
          There are two steps to becoming a member:
        </InstructionText>
        <InstructionText>
          1. Sign up for an account
        </InstructionText>
        <InstructionText>
          Click the button below to sign up for an account.
        </InstructionText>
        <LoginButton /> {/* become a member */} 
        <InstructionText>
          2. Set up your profile
        </InstructionText>
        <InstructionText>
          Once you have signed up, you will be able to set up your profile.
        </InstructionText>
        <InstructionText>
          This is a free service. No credit card required.
        </InstructionText>
      </Wrapper>
    );
  }
};

// styled-components
const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  color: white;
  letter-spacing: 0.05em;
`;

const WelcomeText = styled.h1``;
const InstructionText = styled.h2``;

const RedirectButton = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  margin: 0 0 20px;
  animation: glowing 1.5s infinite;
  @keyframes glowing {
    0% {
      box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
    }
    50% {
      box-shadow: 2px 4px 5px 0px rgba(255, 255, 255, 3);
    }
    100% {
      box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
    }
  }
  padding: 20px;
`;
