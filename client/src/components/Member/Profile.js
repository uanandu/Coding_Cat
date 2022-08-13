import styled from "styled-components";
import { NavLink } from "react-router-dom";
import catImage from "../../assets/Coding Cat-logos_transparent.png";
import { LogoutButton } from "../../helpers/LogoutButton";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../context/UserContext";

export const Profile = () => {
  const { user } = useAuth0();

  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    axios.get(`/api/members/${user.name}`).then((res) => {
      setUserInfo(res.data.data);
    });
  }, [user]);

  return (
    <Wrapper>
      <h1>Profile</h1>
      <h2>Hi there! </h2>
      <h2>This is your profile {userInfo.username}</h2>
      <MemberAvatar>
        <MemberImage src={userInfo.avatar} />
      </MemberAvatar>
      <MemberInstructions>
        <MemberText>
          Welcome to your profile! Here you can see your progress and edit your
          profile.
        </MemberText>
      </MemberInstructions>
      <DraftsSection>here goes the drafts that you have made</DraftsSection>
      <InstructionsSection>
        <MemberText>
          If you wish to try the features available to you, you can go to the
          member area.
        </MemberText>
        <MemberText>
          Or You can access the code playground down here!
        </MemberText>
        <MemberOptionsDiv>
        <CodePlayground to="/members/playground">Code Playground</CodePlayground>
        <EditProfile to="/members/profile/profile-edit">Edit Profile</EditProfile>
        </MemberOptionsDiv>
      </InstructionsSection>
      <LogoutSection>You may logout if you wish here.</LogoutSection>
      <LogoutButton />
    </Wrapper>
  );
};

//styled components
const Wrapper = styled.div`
  color: white;
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const MemberAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  background-color: #f5f5f5;
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const MemberInstructions = styled.div``;
const MemberText = styled.h5``;

const DraftsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 40vw;
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px;
`;

const InstructionsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20vh;
`;

const LogoutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20vh;
`;

const MemberOptionsDiv = styled.div`
width: 50vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CodePlayground = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-family: monospace;
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

const EditProfile = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-family: monospace;
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
