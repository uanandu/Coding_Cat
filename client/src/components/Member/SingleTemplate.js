import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../context/UserContext";

import { Editor } from "../Playground/Editor";
import { Display } from "../Playground/Display";

export const SingleTemplate = () => {
  const { templateType } = useParams();
  const {memberId} = useParams();

  const {
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
    sourceCode,
  } = useContext(UserContext);

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

  console.log(cssCode);


  return (
    <>
      <Wrapper>
        <TopContainer>
          <Editor
            title="HTML"
            code={htmlCode}
            displayName="HTML"
            language="html"
            onChange={setHtmlCode}
          />
          <Editor
            title="CSS"
            code={cssCode}
            displayName="CSS"
            language="css"
            onChange={setCssCode}
          />
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
    </>
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
  max-height: 100vh;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
`;
const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
