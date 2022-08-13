import {useAuth0} from "@auth0/auth0-react"; // from auth0-react
import styled from "styled-components"; // from styled-components

// Login button
export const LogoutButton = () => {
    const {logout} = useAuth0(); // getting context from auth0

    return (
        <Wrapper>
            <Button onClick={logout}>Logout </Button>
        </Wrapper>
    )

}

// styled-components
const Wrapper = styled.div`
    width: 50vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-family: monospace;
  font-size: 1.5rem;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }

  &:hover {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`;
