import { useContext } from "react"; // from react
import axios from "axios"; // from axios

// framer motion
import { motion } from "framer-motion"; 

import styled from "styled-components"; // from styled-components

import { UserContext } from "../../context/UserContext"; // from context

import { Editor } from "../Playground/Editor"; // for editing/displaying the code
import { Display } from "../Playground/Display"; // for displaying the website

// Playground specifically for the member/user
export const MemberPlayground = () => {

  // context needed for the user
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
    handleDraftSave
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
          <SaveButtonDiv onSubmit={handleDraftSave}>
            <SaveButton>Save</SaveButton>
          </SaveButtonDiv>
        </BottomContainer>
      </Wrapper>
    </motion.div>
  );
};

// styled components
const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
  flex-basis: 0;
  width: 100%;
  height: 100vh;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 100%;
  left: 0;
  border-bottom: 1px solid black;
  position: absolute;
`;
const BottomContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  right: 0;
  position: absolute;
  overflow: hidden;

`;

const SaveButtonDiv = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SaveButton = styled.button`
width: 100px;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-family: monospace;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }

  &:hover {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`
