import { NavLink } from "react-router-dom"; // from react-router-dom

// framer motion
import { motion } from "framer-motion";

import styled from "styled-components"; // from styled-components

// Coding class for members/user
export const CodingClasses = () => {
  // Coding class list for members/user
  const codingClass = [
    {
      id: 1,
      title: "HTML and CSS",
      description: "HTML and CSS by cs50",
      image:
        "https://cdn.discordapp.com/attachments/978673047772991548/985266111329222746/html5-logo-EF92D240D7-seeklogo.com.png",
      link: "https://www.youtube.com/watch?v=zFZrkCIc2Oc",
    },
    {
      id: 2,
      title: "JavaScript",
      description: "JavaScript by cs50",
      image:
        "https://cdn.discordapp.com/attachments/978673047772991548/985266345094574120/javascript-js-logo-2949701702-seeklogo.com.png",
      link: "https://www.youtube.com/watch?v=x5trGVMKTdY",
    },
    {
      id: 3,
      title: "Data structures",
      description: "Data structures by cs50",
      image: "https://i.ytimg.com/vi/Z0bBXXiCbrE/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=2T-A_GFuoTo",
    },
    {
      id: 4,
      title: "React",
      description: "React by cs50",
      image:
        "https://cdn.discordapp.com/attachments/978673047772991548/985266344876453948/react-logo-7B3CE81517-seeklogo.com.png",
      link: "https://www.youtube.com/watch?v=9NQtG_IIh6M",
    },
    {
      id: 5,
      title: "Node and Express",
      description: "Node and Express by cs50",
      image:
        "https://cdn.discordapp.com/attachments/978673047772991548/985266344666742784/nodejs-logo-FBE122E377-seeklogo.com.png",
      link: "https://www.youtube.com/watch?v=OCBCZlBVFvo",
    },
    {
      id: 6,
      title: "Javascript ES6",
      description: "Javascript ES6 by WebDev Simplified",
      image:
        "https://cdn.discordapp.com/attachments/978673047772991548/985266345094574120/javascript-js-logo-2949701702-seeklogo.com.png",
      link: "https://www.youtube.com/watch?v=h33Srr5J9nY",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <CodingClassesHeader>
          <CodingClassesTitle>Coding Classes here</CodingClassesTitle>
        </CodingClassesHeader>
        <CodingClassesBody>
          {codingClass.length > 0 ? (
            codingClass.map((codingClass) => {
              return (
                <CodingClassCard key={codingClass._id}>
                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href={codingClass.link}
                    target="blank"
                  >
                    <CodingClassImage
                      src={codingClass.image}
                      alt="coding class"
                    />
                    <CodingClassTitle>{codingClass.title}</CodingClassTitle>
                    <CodingClassInfo>{codingClass.description}</CodingClassInfo>
                  </a>
                </CodingClassCard>
              );
            })
          ) : (
            <p>No coding classes yet</p>
          )}
        </CodingClassesBody>
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
`;

const CodingClassesHeader = styled.div`
  position: relative;
  top: 10vh;
`;
const CodingClassesTitle = styled.h1``;

const CodingClassesBody = styled.div`
  position: relative;
  top: 15vh;
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;
`;

const CodingClassCard = styled.div`
  text-decoration: none;
  color: white;
  padding: 30px;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
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
  }
`;
const CodingClassImage = styled.img`
  width: 50px;
  height: auto;
  object-fit: contain;
`;
const CodingClassTitle = styled.h1``;
const CodingClassInfo = styled.p``;
