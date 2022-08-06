import styled from "styled-components";


export const Display = ({sourceCode}) => {
    return (
        <>
    <DisplayWrapper>
      <FrameHere title="display-area" style={{sandbox:"allow-scripts", frameBorder:"0"}} srcDoc={sourceCode}/>
    </DisplayWrapper>
        </>
    );
}

// styled components
const DisplayWrapper = styled.div`
    height:42vh;
    width: 100%;
  background-color: azure;
  margin: 10px;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;


const FrameHere = styled.iframe`
    width: 100%;
    height: 100%;
`