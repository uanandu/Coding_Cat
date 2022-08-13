import { useEffect, useContext } from "react"; // from react 
import { useParams } from "react-router-dom"; // from react-router-dom
import axios from "axios"; // from axios

// framer motion
import { motion } from "framer-motion";

import styled from "styled-components"; // from styled-components

import { UserContext } from "../../context/UserContext"; // from context

import { Editor } from "../Playground/Editor"; // for playground editor
import { Display } from "../Playground/Display"; // for playground display

// single template display
export const SingleTemplate = () => {
  const { templateType } = useParams(); // get template type from url
  const {memberId} = useParams(); // get member id from url

  // getting user context
  const {
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
    sourceCode,
  } = useContext(UserContext);


  // fetch call: get single template
  useEffect(() => {
    axios
      .get(`/api/members/templates/${templateType}`)
      .then((res) => {
        setHtmlCode(Object.values(res.data.html).join("\n"));
        setCssCode(Object.values(res.data.css).join("\n"));
        setJsCode(Object.values(res.data.js).join("\n"));
      })
      .catch((err) => console.log(err));
  }, [memberId, templateType]);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <Wrapper>
        <TopContainer>
          <Editor
            title="HTML"
            code={htmlCode}
            displayName="HTML"
            language="html"
            onChange={setHtmlCode}
          />
          <Divider />
          <Editor
            title="CSS"
            code={cssCode}
            displayName="CSS"
            language="css"
            onChange={setCssCode}
          />
          <Divider />
          <Editor
            title="JS"
            code={jsCode}
            displayName="JS"
            language="javascript"
            onChange={setJsCode}
          />
        </TopContainer>
        <BottomContainer>
          <Display sourceCode={sourceCode} />
        </BottomContainer>
      </Wrapper>
    </motion.div>
  );
};

// styled components
const Wrapper = styled.div`
position: relative;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
  flex-basis: 0;
  width: 100%;
  height: 95vh;
  top: 5vh;
  overflow: hidden;
`;

const Divider = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: white;
`

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  left: 0;
  border-bottom: 1px solid black;
  position: relative;
`;
const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  right: 0;
  position: relative;
  overflow: hidden;

`;