import { useState, useEffect } from "react"; // from react

import styled from "styled-components"; // from styled-components

import CodeEditor from "@uiw/react-textarea-code-editor"; // for editing/displaying the code (Code editor given by the dependency)

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
    <>
      <Wrapper
        style={{
          flexGrow: open ? "1" : "0",
        }}
      >
        <TitleArea>
          <Title>
            <TitleText>{displayName}</TitleText>
            <TitleIcon></TitleIcon>
          </Title>
          <CollapseButton onClick={hancleClick}>
            {open ? "Collapse 🤛🏽" : "Expand 🤌🏽"}
          </CollapseButton>
        </TitleArea>
        <CodeEditor
          onChange={(e) => {
            handleChange(e);
          }}
          language={language}
          placeholder={placeHolder}
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
    </>
  );
};

// styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
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
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px 0 0 0;
`;

const TitleText = styled.h3``;

const TitleIcon = styled.img``;

const CollapseButton = styled.button`
  border-radius: 10px;
  width: 100px;
  font-weight: 700;
  cursor: pointer;
`;
