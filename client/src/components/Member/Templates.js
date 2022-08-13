import styled from "styled-components";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../context/UserContext";

export const Templates = () => {

  const { templates, setTemplates , userInfo} = useContext(UserContext);

  const templateImages = [
    "https://cdn.discordapp.com/attachments/978673047772991548/1007285586828202025/html-starter.png",
    "https://cdn.discordapp.com/attachments/978673047772991548/1007285746014617641/headings.png",
    "https://cdn.discordapp.com/attachments/978673047772991548/1007285913941983304/list.png",
    "https://cdn.discordapp.com/attachments/978673047772991548/1007286063435354132/table.png",
    "https://cdn.discordapp.com/attachments/978673047772991548/1007286271569305720/form.png",
  ];

  useEffect(() => {
    axios
      .get(`/api/members/templates`)
      .then((res) => {
        setTemplates(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <MemberInstructions>
        <MemberText>
          <MemberTitle>Hi @{userInfo.username}!</MemberTitle>
          <p>These are the templates available to you: </p>
        </MemberText>
      </MemberInstructions>
      <FeaturesContainer>
        {templates.map((template, index) => {
          return (
            <Feature key={index} to={`/members/templates/${template.type}`}>
              <FeatureTitle>{template.type}</FeatureTitle>
              <FeatureTile>
                <FeatureImage src={templateImages[index]} />
              </FeatureTile>
            </Feature>
          );
        })}
      </FeaturesContainer>
    </Wrapper>
  );
};

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
position: relative;
  margin-top: 10vh;
  text-align: center;
`;
const MemberText = styled.div``;
const MemberTitle = styled.h1``;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5vw;
  position: relative;
  top: 10vh;
`;

// set to navlink to make it clickable
const Feature = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  border-radius: 5px;
  transition: 1s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }

  &:hover {
    outline: none;
    transform: scale(1.2);
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`;
const FeatureTitle = styled.h1``;
const FeatureTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: auto;
`;
const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
