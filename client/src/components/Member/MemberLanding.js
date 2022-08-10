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
      type: "Coding challenges",
      description: "Challenge yourself",
      image: "https://i.imgur.com/q5XxQZb.png",
      link: `/members/coding-challenges`,
    }
  ];

  return (
    <Wrapper>
       <MemberInstructions>
        <MemberText>
          <MemberTitle>Hi {userInfo.username}!</MemberTitle>
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
`;
const MemberTitle = styled.h1``;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 100px;
  margin-top: 50px;
`;

const Feature = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: 1s ease-in-out;

  &:hover {
    border: 1px solid #f5f5f5;
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