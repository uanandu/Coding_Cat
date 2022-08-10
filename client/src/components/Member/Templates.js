import styled from "styled-components";
import { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../context/UserContext";

import catimage from "../../assets/Coding Cat-logos_transparent.png";

export const Templates = () => {
  const {memberId} = useParams(); 

  const { templates, setTemplates } = useContext(UserContext);

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
          <MemberTitle>Hi Member!</MemberTitle>
          <p>These are the templates available to you: </p>
        </MemberText>
      </MemberInstructions>
      <FeaturesContainer>
        {templates.map((template, index) => {
          return (
            <Feature key={index} to={`/members/templates/${template.type}`}>
              <FeatureTitle>{template.type}</FeatureTitle>
              <FeatureTile>
                <FeatureImage src={catimage} />
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

const MemberInstructions = styled.div``;
const MemberText = styled.div``;
const MemberTitle = styled.h1``;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;

// set to navlink to make it clickable
const Feature = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
`;
const FeatureTitle = styled.h1``;
const FeatureTile = styled.div``;
const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
