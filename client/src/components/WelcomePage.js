import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { CodeDisplay } from "./CodeDisplay";
import { useAuth0 } from "@auth0/auth0-react";

export const WelcomePage = () => {
  const { user } = useAuth0();

  const [userCheck, setUserCheck] = useState(false);

  if (user) {
    axios
      .get(`/api/members/${user.name}`)
      .then((res) => {
        if (res.status === 200) {
          setUserCheck(true);
        } else {
          setUserCheck(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <LeftDiv>
        <ImageDiv>
          <Image src="https://cdn.discordapp.com/attachments/978673047772991548/1006973184656036050/coding.png" />
        </ImageDiv>
        <MessageDiv>
          <MessageHeader>
            <MessageList>
              <MessageItem>repeat.</MessageItem>
              <MessageItem>Develop.</MessageItem>
              <MessageItem>design.</MessageItem>
              <MessageItem>learn.</MessageItem>
              <MessageItem>Imagine.</MessageItem>
            </MessageList>
          </MessageHeader>
        </MessageDiv>
      </LeftDiv>
      <RightDiv>
        <TextHere>
          <WelcomeText>Welcome to the Coding Cat community!</WelcomeText>
          <CodeDisplay />
        </TextHere>
        <BottomRightDiv>
          {user ? (
            <>
              {userCheck ? (
                <StartCodingLink to="/members/landing">Go!</StartCodingLink>
              ) : (
                <StartCodingLink to="/member">
                  Member Profile Setup
                </StartCodingLink>
              )}
            </>
          ) : (
            <StartCodingLink to="/plans">Go!</StartCodingLink>
          )}
        </BottomRightDiv>
      </RightDiv>
    </Wrapper>
  );
};

// styled-components
const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  color: white;
  letter-spacing: 0.05em;
`;

const LeftDiv = styled.div`
  width: 100%;
  height: 95vh;
`;

const ImageDiv = styled.div``;
const Image = styled.img``;

const MessageDiv = styled.div`
  position: relative;
  left: 5vw;
`;
const MessageHeader = styled.header`
  margin: 7rem auto;
  overflow: hidden;
`;
const MessageList = styled.ul`
  height: 3em;
  margin: 0px;
  padding: 0px;
  width: 100%;
  animation-name: titleflip;
  animation: titleflip 5s ease-in-out infinite;
  @keyframes titleflip {
    0%,
    20% {
      transform: translate(0px, -12.5em);
    }
    20%,
    40% {
      transform: translate(0px, -9.375em);
    }
    40%,
    60% {
      -webkit-transform: translate(0px, -6.44em);
    }
    60%,
    80% {
      transform: translate(0px, -3.44em);
    }
    80%,
    100% {
      transform: translate(0px, -0.315em);
    }
    100%,
    0% {
      transform: translate(0px, -12.5em);
    }
  }
`;
const MessageItem = styled.li`
  list-style-type: none;
  margin: 0px 0 1px 0;
  height: 1em !important;
  padding: 0px 0 0px 0;
  font-size: 3em;
  text-transform: uppercase;
  width: 100%;
`;

const RightDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 95vh;
  overflow: hidden;
`;

const BottomRightDiv = styled.div``;

const TextHere = styled.div``;

const WelcomeText = styled.h1``;

const StartCodingLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0 0 20px;
  font-family: monospace, sans-serif;
  border: 2px solid white;
  padding: 20px;
  transition: 1s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
  }
`;
