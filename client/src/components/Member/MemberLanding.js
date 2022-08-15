import styled from "styled-components"; // styled-components
import { useContext, useEffect } from "react"; // from react
import { NavLink } from "react-router-dom"; // from react-router-dom
import axios from "axios"; // from axios

// framer motion
import { motion } from "framer-motion";

import { useAuth0 } from "@auth0/auth0-react"; // from auth0

import { UserContext } from "../../context/UserContext"; // for context

export const MemberLanding = () => {
  const { user} = useAuth0(); // get user from auth0

  const {userInfo, setUserInfo} = useContext(UserContext); // get user info from context

  // fetch call: get user info
  useEffect(() => {
    axios.get(`/api/members/${user.name}`).then(res => {
      setUserInfo(res.data.data);
    });
  }, [user]);

  // features available to members
  const memberFeatures = [
    {
      id: 1,
      type: "Template",
      description: "Templates available to you",
      image: "https://media.giphy.com/media/yidUzANREfLN5jczXW/giphy.gif",
      link: `/members/templates`,
    },
    {
      id: 2,
      type: "Community Drafts",
      description: "Save your work and take inspiration from others",
      image: "https://media.giphy.com/media/9V73lQx5Sa7r14IDqT/giphy.gif",
      link: `/members/drafts`,
    },
    {
      id: 3,
      type: "Profile",
      // description: "View your profile",
      image: "https://media.giphy.com/media/jV50tlDmJYgcYdTA6q/giphy.gif",
      link: `/members/profile`,
    },
    {
      id: 4,
      type: "Coding classes",
      description: "Learn to code",
      image: "https://media.giphy.com/media/dscTJjpsiVamjIk6nk/giphy.gif",
      link: `/members/coding-classes`,
    },
    // {
    //   id: 5,
    //   type: "Coding forums",
    //   description: "Discuss with other members",
    //   image: "https://media.giphy.com/media/kZhTzZhLseEDQARkUN/giphy.gif",
    //   link: `/members/coding-forums`,
    // },
    {
      id: 5,
      type: "Resources",
      description: "Go-to resources",
      image: "https://media.giphy.com/media/dRsbhtWff5t5QeddbE/giphy.gif",
      link: `/members/resources`,
    }
  ];

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Wrapper>
       <MemberInstructions>
        <MemberText>
          <MemberTitle>Hi @{userInfo.username}!</MemberTitle>
          <p>These are the our premium features: </p>
        </MemberText>
      </MemberInstructions>
      <FeaturesContainer>
        {
          memberFeatures.map((feature) => {
            return (
              <Feature key={feature.id} to={feature.link}>
                <FeatureTitle>{feature.type}</FeatureTitle>
                <FeatureTile>
                  <FeatureImage src={feature.image} />
                </FeatureTile>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </Feature>
            );
          })
        }

      </FeaturesContainer>
    </Wrapper>
  </motion.div>
  );
}

// styled components

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  top: 5vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  color: white;
  letter-spacing: 0.05em;
`;

const MemberInstructions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
`;
const MemberText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  margin-top: 2vh;
`;
const MemberTitle = styled.h1``;

const FeaturesContainer = styled.div`
width: 80vw;
height: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 100px;
  margin-top: 2vh;
`;

const Feature = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  
  align-items: center;
  text-decoration: none;
  background-color: white;
  color: black;
  transition: 1s ease-in-out;
  padding: 30px 0 30px 0;
  border-radius: 10px;
  width: auto;
  height: 35vh;
  border: 1px solid white;

  &:hover {
    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
  /* animation: glowing 1.5s infinite;

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

  &:hover {
    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
    transform: scale(1.1);
  } */
`;
const FeatureTitle = styled.h1`
  padding: 20px;
`;
const FeatureTile = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FeatureImage = styled.img`
  width: 15vw;
  height: 15vh;
  object-fit: contain;
`;
const FeatureDescription = styled.p`
  padding: 0 20px 0px 20px;
`;