import { useState, useEffect } from "react"; // from react

import styled from "styled-components"; // from styled-components

// framer motion
import { motion } from "framer-motion";

import CodeEditor from "@uiw/react-textarea-code-editor"; // for editing/displaying the code (Code editor given by the dependency)

import Icon from "react-icons-kit";
import { ban } from "react-icons-kit/fa/ban";

// Editor for editing and changing the code
export const Editor = ({
  displayName,
  placeHolder,
  onChange,
  language,
  code,
}) => {
  // state
  const [open, setOpen] = useState(true);

  // function to collapse/expand the code editor
  const hancleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  // function to change the code to send it to the database
  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  // keydown event to save the code/ make changes to code
  useEffect(() => {
    return () => {
      document.removeEventListener("keydown", handleChange);
    };
  }, [handleChange]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper
        style={{
          height: open ? "calc(90vh/3)" : "calc(30vh/3)",
        }}
      >
        <TitleArea>
          <Title>
            <TitleText>{displayName}</TitleText>
            <TitleIcon></TitleIcon>
          </Title>
          <ButtonFunctions>
            <CollapseButton onClick={hancleClick}>
              {open ? "Collapse 🤛🏽" : "Expand 🤌🏽"}
            </CollapseButton>
            <ClearButton
              onClick={() => {
                onChange("");
              }}
            >
              <Icon icon={ban} size={20} />
            </ClearButton>
          </ButtonFunctions>
        </TitleArea>
        <CodeEditor
          onChange={(e) => {
            handleChange(e);
          }}
          language={language}
          // placeholder={placeHolder}
          value={code}
          padding={15}
          style={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            fontSize: 14,
            backgroundColor: "#fafafa",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        />
      </Wrapper>
    </motion.div>
  );
};

// styled components
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  align-items: center;
`;

const Title = styled.div`
  background-color: white;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0 0 0;

  &:hover {
    cursor: pointer;
  }
`;

const TitleText = styled.h3``;

const TitleIcon = styled.img``;

const ButtonFunctions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`

const CollapseButton = styled.button`
  border-radius: 5px;
  width: 100px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 10px;
`;

const ClearButton = styled.button`
  border-radius: 10px;
  width: 50px;
  font-weight: 700;
  cursor: pointer;
`;
