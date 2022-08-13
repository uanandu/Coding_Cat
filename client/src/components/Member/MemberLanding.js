import styled from "styled-components";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import { UserContext } from "../../context/UserContext";

export const MemberLanding = () => {
  const { user} = useAuth0();

  const {userInfo, setUserInfo} = useContext(UserContext);

  useEffect(() => {
    axios.get(`/api/members/${user.name}`).then(res => {
      setUserInfo(res.data.data);
    });
  }, [user]);

  const memberFeatures = [
    {
      id: 1,
      type: "Template",
      description: "Take a look at the templates available to you",
      image: "https://i.imgur.com/q5XxQZb.png",
      link: `/members/templates`,
    },
    {
      id: 2,
      type: "Drafts",
      description: "Save your work",
      image: "https://i.imgur.com/q5XxQZb.png",
      link: `/members/drafts`,
    },
    {
      id: 3,
      type: "Profile",
      description: "View your profile",
      image: "https://i.imgur.com/q5XxQZb.png",
      link: `/members/profile`,
    },
    {
      id: 4,
      type: "Coding classes",
      description: "Learn to code",
      image: "https://i.imgur.com/q5XxQZb.png",
      link: `/members/coding-classes`,
    },
    {
      id: 5,
      type: "Coding forums",
      description: "Discuss with other members",
      image: "https://i.imgur.com/q5XxQZb.png",
      link: `/members/coding-forums`,
    },
    {
      id: 6,
      type: "Resources",
      description: "Go-to resources",
      image: "https://i.imgur.com/q5XxQZb.png",
      link: `/members/resources`,
    }
  ];

  return (
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
  );
}

// styled components

const Wrapper = styled.div`
  color: white;
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
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
  margin-top: 10vh;
`;
const MemberTitle = styled.h1``;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 100px;
  margin-top: 10vh;
`;

const Feature = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: 1s ease-in-out;
  padding: 30px;
  border-radius: 10px;
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

  &:hover {
    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;
const FeatureTitle = styled.h1``;
const FeatureTile = styled.div``;
const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const FeatureDescription = styled.p``;