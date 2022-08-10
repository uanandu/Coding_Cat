import styled from "styled-components";

export const ErrorPage = () => {
    return (
        <Wrapper>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        </Wrapper>
    );
}

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