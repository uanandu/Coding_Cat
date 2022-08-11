import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import he from "he";

import { UserContext } from "../../context/UserContext";

import { Editor } from "../Playground/Editor";
import { Display } from "../Playground/Display";

export const SingleDraft = () => {
  const { draftId } = useParams();
  const {memberId} = useParams();

    const [creditToUser, setCreditToUser] = useState(null);

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
      .get(`/api/members/drafts/${draftId}`)
      .then((res) => {
        console.log("the response from the draft", res);
        setHtmlCode(he.decode(res.data.data.html));
        setCssCode(he.decode(res.data.data.css));
        setJsCode(he.decode(res.data.data.js));
        setCreditToUser(res.data.data.user);
      })
      .catch((err) => console.log(err));
  }, [memberId, draftId]);


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
          {
            creditToUser &&
            <CreditToUser>
                <h4>Credit to:</h4>
                <h3 style={{fontStyle:"italic"}}>{creditToUser}</h3>
            </CreditToUser>
          }
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
  height: 100vh;
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

const CreditToUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: auto;
    color: white;
`
