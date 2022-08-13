import styled from "styled-components"; // styled-components

// framer motion
import { motion } from "framer-motion";

export const Resources = () => {

  // available resources
    const resources = [
        {
            id: 1,
            type: "FreecodeCamp",
            description: "Learn to code",
            image: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
            link: "https://www.freecodecamp.org/",
        },
        {
            id: 2,
            type: "W3Schools",
            description: "Learn HTML",
            image: "https://cdn.discordapp.com/attachments/978673047772991548/985266111329222746/html5-logo-EF92D240D7-seeklogo.com.png",
            link: "https://www.w3schools.com/html/",
        },
        {
            id: 3,
            type: "W3Schools",
            description: "Learn CSS",
            image: "https://cdn.discordapp.com/attachments/978673047772991548/985266111878692864/css3-logo-8724075274-seeklogo.com.png",
            link: "https://www.w3schools.com/css/",
        },
        {
            id: 4,
            type: "W3Schools",
            description: "Learn JavaScript",
            image: "https://cdn.discordapp.com/attachments/978673047772991548/985266345094574120/javascript-js-logo-2949701702-seeklogo.com.png",
            link: "https://www.w3schools.com/js/",
        },
        {
            id: 5,
            type: "W3Schools",
            description: "Learn React",
            image: "https://cdn.discordapp.com/attachments/978673047772991548/985266344876453948/react-logo-7B3CE81517-seeklogo.com.png",
            link: "https://www.w3schools.com/react/",
        },
        {
            id: 6,
            type: "W3Schools",
            description: "Learn Node.js",
            image: "https://cdn.discordapp.com/attachments/978673047772991548/985266344666742784/nodejs-logo-FBE122E377-seeklogo.com.png",
            link: "https://www.w3schools.com/nodejs/",
        },
        {
            id: 7,
            type: "W3Schools",
            description: "Learn Express",
            image: "https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/expressjs/2.0.0/1509881293872/Microsoft.VisualStudio.Services.Icons.Default",
            link: "https://www.w3schools.com/nodejs/nodejs_express.asp",
        },
        {
            id: 8,
            type: "W3Schools",
            description: "Learn MongoDB",
            image: "https://www.codeplusinfo.com/wp-content/uploads/2020/02/MongoDB-logo.png",
            link: "https://laymanclass.com/wp-content/uploads/2019/08/mongodb2.jpeg",
        },
        {
            id: 9,
            type: "W3Schools",
            description: "Learn MySQL",
            image: "https://geeklk.com/wp-content/uploads/2014/03/mysql-geeklk.jpg",
            link: "https://www.w3schools.com/sql/default.asp",
        },
    ];

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Wrapper>
         <MemberText>
          <MemberTitle>Hi Member!</MemberTitle>
          <p>These are the free resources that you may access: </p>
        </MemberText>
        <FeaturesContainer>
        {resources.map((resource) => {
          return (
            <Feature key={resource.id} href={resource.link} target="blank">
              <FeatureTitle>{resource.type}</FeatureTitle>
              <FeatureDescription>{resource.description}</FeatureDescription>
              <FeatureTile>
                <FeatureImage src={resource.image} />
              </FeatureTile>
            </Feature>
          );
        })}
      </FeaturesContainer>
    </Wrapper>
  </motion.div>
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
  text-align: center;
  justify-content: flex-start;
`;

const MemberText = styled.div``;
const MemberTitle = styled.h1``;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5vw;
  position: relative;
  top: 3vh;
`;

// set to navlink to make it clickable
const Feature = styled.a`
width: 15vw;
height: auto;
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
    transform: scale(1.1);
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
  padding: 20px;

`;
const FeatureTitle = styled.h1``;
const FeatureTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;
const FeatureDescription = styled.p``
const FeatureImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`;
