import { useState, useEffect, useContext } from "react"; // from react
import { useParams } from "react-router-dom"; // from react-router-dom
import axios from "axios"; // from axios

import styled from "styled-components"; // for styling

import he from "he"; // for encoding/decoding html and other special characters

import { UserContext } from "../../context/UserContext"; // from context

import { Editor } from "../Playground/Editor"; // for editing/displaying the code
import { Display } from "../Playground/Display"; // for displaying the website

// Single Draft displayed on Member Playground
export const SingleDraft = () => {
  const { draftId } = useParams(); // get draftId from url
  const {memberId} = useParams(); // get memberId from url

  const [creditToUser, setCreditToUser] = useState(null); // credit given to user(name is displayed)

  // user context needed for the user
  const {
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
    sourceCode,
  } = useContext(UserContext);

  // get draft info from database
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
  height: 100vh;
  left: 0;
  margin-top: 4vh;
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

const CreditToUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: auto;
    color: white;
`
