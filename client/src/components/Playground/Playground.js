import { useContext } from "react"; // from react

// framer motion
import { motion } from "framer-motion";

import styled from "styled-components"; // from styled-components

import { UserContext } from "../../context/UserContext"; // from context

import { Editor } from "./Editor"; // for code editor
import { Display } from "./Display"; // for webpage display

// Playground for the guestuser
export const Playground = () => {

  // get user info from context
  const {
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
    sourceCode,
    htmlPlaceHolder,
    cssPlaceHolder,
    jsPlaceHolder,
  } = useContext(UserContext);

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
            setCode={setHtmlCode}
            displayName="HTML"
            language="html"
            placeHolder={htmlPlaceHolder}
            onChange={setHtmlCode}
          />
          <Editor
            title="CSS"
            code={cssCode}
            setCode={setCssCode}
            displayName="CSS"
            language="css"
            placeHolder={cssPlaceHolder}
            onChange={setCssCode}
          />
          <Editor
            title="JS"
            code={jsCode}
            setCode={setJsCode}
            displayName="JS"
            language="javascript"
            placeHolder={jsPlaceHolder}
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
  border: 1px solid white;
  border-radius: 5px;
  top: 5vh;
  bottom: 7vh;
  overflow: hidden;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  left: 0;
  position: relative;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  right: 0;
  position: relative;
  overflow: hidden;
  border-left: 1px solid white;
  margin-left: 15px;
`;