import { NavLink } from "react-router-dom"; // from react-router-dom

// framer motion
import { motion } from "framer-motion";

import styled from "styled-components"; // styled-components

//Select plans option
export const Plans = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <Instructions>
          <h1>Please choose a plan:</h1>
        </Instructions>
        <RegistrationContainer>
          <GuestContainer to="/playground">
            <GuestIllustration
              src="https://media.giphy.com/media/R4H1oAuFVnEwdsXVoR/giphy.gif"
              alt="free plan"
            />
            <GuestProsList>
              <GuestProsText>Features:</GuestProsText>
              <GuestProsItem>Free plan</GuestProsItem>
              <GuestProsItem>No registration required</GuestProsItem>
              <GuestProsItem>Playground to test your code</GuestProsItem>
              <GuestCostText>Free</GuestCostText>
            </GuestProsList>
          </GuestContainer>
          <MemberContainer to="/registration">
            <MemberIllustration
              src="https://media.giphy.com/media/daUNvsWuU3s8WeLnq3/giphy.gif"
              alt="member plan"
            />
            <MemberProsList>
              <MemberProsText>Features:</MemberProsText>
              <MemberProsItem>Member plan</MemberProsItem>
              <MemberProsItem>Templates to create your own</MemberProsItem>
              <MemberProsItem>Drafts to save your work</MemberProsItem>
              <MemberProsItem>Coding lessons</MemberProsItem>
              <MemberProsItem>Coding Exercises</MemberProsItem>

              <MemberCostText>Registration required</MemberCostText>
            </MemberProsList>
          </MemberContainer>
        </RegistrationContainer>
      </Wrapper>
    </motion.div>
  );
};

// styled-components

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RegistrationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  width: 80vw;
  height: 50vh;
`;

const Instructions = styled.div``;

const GuestContainer = styled(NavLink)`
  text-decoration: none;
  color: white;
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 10px 10px 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  transition: 1s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
  }

  &:active {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

const GuestIllustration = styled.img`
  width: 200px;
  height: auto;
`;
const GuestProsText = styled.h2`
  text-transform: uppercase;
`;
const GuestProsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 10px 10px 10px;
  list-style-type: none;
`;
const GuestProsItem = styled.li`
  padding: 20px 0 20px 0;
  font-size: medium;
  border-bottom: 1px solid white;
  width: 350px;
`;
const GuestCostText = styled.h1`
  text-transform: uppercase;
`;

const MemberContainer = styled(NavLink)`
  text-decoration: none;
  color: white;
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 10px 10px 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  transition: 1s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    transform: scale(1.05);
  }

  &:active {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

const MemberProsText = styled.h2`
  text-transform: uppercase;
`;
const MemberIllustration = styled.img`
  padding-top: 20px;
  width: 200px;
  height: auto;
`;
const MemberProsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 10px 10px 10px;
  list-style-type: none;
`;
const MemberProsItem = styled.li`
  padding: 20px 0 20px 0;
  font-size: medium;
  border-bottom: 1px solid white;
  width: 350px;
`;
const MemberCostText = styled.h1`
  text-transform: uppercase;
`;
