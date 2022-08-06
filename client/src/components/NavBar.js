import styled from "styled-components";

export const NavBar = () => {
    return (
        <Wrapper>
            <Logo>CC</Logo>
        </Wrapper>
    );
}

//styled-components

const Wrapper = styled.div`
    background-color: #f5f5f5;
    height: 5vh;
    display: flex;
    align-items: center;
    padding: 0 2rem 0 2rem;
`;

const Logo = styled.div`
    font-size: 2rem;
    font-style: italic;
    font-weight: 800;
`