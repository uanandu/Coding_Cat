import styled from "styled-components"; // styled-components

// Error page for the website
export const ErrorPage = () => {
  return (
    <Wrapper>
      <ErrorContainer>
        <img src="https://media.giphy.com/media/jspCHR7d6h5IB9vaUA/giphy.gif?cid=ecf05e473cwl75n2ktwcre3woy60nh6k714ze0ylvka3nozh&rid=giphy.gif&ct=s" alt="error" />
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
`;

const ErrorContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
`