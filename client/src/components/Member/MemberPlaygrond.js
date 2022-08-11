// framer motion
import { motion } from "framer-motion";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";import { Editor } from "../Playground/Editor";
import { Display } from "../Playground/Display";

import axios from "axios";

export const MemberPlayground = () => {
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

  console.log("the html code", htmlCode);

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
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  flex-basis: 0;
  width: 100%;
  height: 100vh;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80%;
  border-bottom: 1px solid black;
`;
const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
