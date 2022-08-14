import styled from "styled-components"; // styled-components

// Error page for the website
export const ErrorPage = () => {
  return (
    <Wrapper>
      <ErrorContainer>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </ErrorContainer>
    </Wrapper>
  );
};

// styled-components
const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  color: white;
`;

const ErrorContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
`