import styled from "styled-components";
import { useState, useEffect } from "react";

import { Editor } from "./Editor";
import { Display } from "./Display";

export const Playground = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [sourceCode, setSourceCode] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSourceCode(
        `
                    <html>
                        <body>${htmlCode}</body>
                        <style>${cssCode}</style>
                        <script type="text/javascript">${jsCode}</script>
                    </html>
                `
      );
    }, 300);
    return () => clearTimeout(timeOut);
  }, [htmlCode, cssCode, jsCode]);

  let htmlPlaceHolder = `
    <html>
      <body>
        please enter the html code that goes here...
      </body>
    </html>
  `;

  let cssPlaceHolder = `
    /* please enter the css code that goes here... */
  `;

  let jsPlaceHolder = `
    /* please enter the js code that goes here... */
  `;

  return (
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
