import { useState, useEffect, useContext } from "react"; // from react
import { useParams } from "react-router-dom"; // from react-router-dom
import axios from "axios"; // from axios

// framer motion
import { motion } from "framer-motion";

import styled from "styled-components"; // for styling

import he from "he"; // for encoding/decoding html and other special characters

import { UserContext } from "../../context/UserContext"; // from context

import { Editor } from "../Playground/Editor"; // for editing/displaying the code
import { Display } from "../Playground/Display"; // for displaying the website

// Single Draft displayed on Member Playground
export const SingleDraft = () => {
  const { draftId } = useParams(); // get draftId from url
  const { memberId } = useParams(); // get memberId from url

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
          {creditToUser && (
            <CreditToUser>
              <h4>Credit to:</h4>
              <h3 style={{ fontStyle: "italic" }}>{creditToUser}</h3>
            </CreditToUser>
          )}
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

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  left: 0;
  border-bottom: 1px solid black;
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
  border-right: 1px solid white;
  margin-left: 15px;
`;

const CreditToUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 93vh;
  top: 6vh;
  right: 0;
  color: white;
  position: relative;
  color: white;
`;
