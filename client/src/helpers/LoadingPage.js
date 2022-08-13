import styled from "styled-components"; // styled-components

// Loading page for the website
export const LoadingPage = () => {
  return (
    <Wrapper>
      <LoadingImage
        src="https://media.giphy.com/media/vCUjNFrZOW7kjl9fEO/giphy.gif"
        alt="loading"
      />
      <LoadingBar></LoadingBar>
      <LoadingPageTitle>Loading...</LoadingPageTitle>
    </Wrapper>
  );
};

// styled-components
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;
const LoadingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const LoadingBar = styled.div`
  width: 200px;
  height: 5px;
  background-color: lightgray;
  margin-top: 20px;
  border-radius: 5px;
  position: relative;

  &:before {
    content: "";
    width: 70px;
    height: 5px;
    background-color: white;
    position: absolute;
    left: -40px;
    animation: bar 1.5s infinite;

    @keyframes bar {
      50% {
        left: 96px;
      }
    }
  }
`;
const LoadingPageTitle = styled.h1``;
