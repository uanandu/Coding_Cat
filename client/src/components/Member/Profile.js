import { useContext, useEffect, useState } from "react"; // from react
import { NavLink } from "react-router-dom"; // from react-router-dom
import axios from "axios"; // from axios

// framer motion
import { motion } from "framer-motion";

import styled from "styled-components"; // from styled-components

import { useAuth0 } from "@auth0/auth0-react"; // from auth0
import { UserContext } from "../../context/UserContext"; // from context

import { LogoutButton } from "../../helpers/LogoutButton"; // LogoutButton for logging out using auth0

import catImage from "../../assets/Coding Cat-logos_transparent.png"; // for default logo

// Profile component for the user
export const Profile = () => {
  const { user } = useAuth0(); // get user info from auth0

  const { userInfo, setUserInfo } = useContext(UserContext); // get user info from context

  // user draft state
  const [userDrafts, setUserDrafts] = useState([]);

  // fetch call: get user info
  useEffect(() => {
    axios.get(`/api/members/${user.name}`).then((res) => {
      setUserInfo(res.data.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  //get the drafts of the user
  useEffect(() => {
    axios.get(`/api/drafts/${user.name}`).then((res) => {
      setUserDrafts(res.data.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <ProfileWelcome>
          <MemberTitle>
            Profile{" "}
            <img
              style={{ width: "80px", height: "auto" }}
              src="https://media.giphy.com/media/RhGbWYqUJdPWM18zI6/giphy.gif"
              alt="Coding Cat"
            />
          </MemberTitle>
          <MemberSubTitle>
            This is your profile @{userInfo.username}
            <IconMember
              src="https://media.giphy.com/media/U6e6JUgqF684qSunZ2/giphy.gif"
              alt="Coding Cat"
            />
          </MemberSubTitle>
        </ProfileWelcome>

        <TopContainer>
          <MemberDetails>
            <MemberInfo>Username: @{userInfo.username}</MemberInfo>
            <MemberInfo>Name: {userInfo.fullname}</MemberInfo>
            <MemberInfo>Email: {userInfo.email}</MemberInfo>
            <MemberInfo>Age: {userInfo.age}</MemberInfo>
            <MemberInfo>Occupation: {userInfo.occupation}</MemberInfo>
            <MemberInfo>Bio: {userInfo.memberbio}</MemberInfo>
          </MemberDetails>
          <MemberOptionsDiv>
            <CodePlayground to="/members/playground">
              Code Playground
            </CodePlayground>
            <EditProfile to="/members/profile/profile-edit">
              Edit Profile
            </EditProfile>
          </MemberOptionsDiv>
          <MemberAvatar>
            <MemberImage src={userInfo.avatar} />
          </MemberAvatar>
        </TopContainer>

        <MemberInstructions>
          <MemberText>
            Welcome to your profile! Here you can see your progress and edit
            your profile.
          </MemberText>
        </MemberInstructions>
        <DraftsSection>
          {
            userDrafts.length > 0 ? (
              userDrafts.map((draft) => {
                return (
                  <DraftCard key={draft._id} to={`/members/drafts/${draft._id}`}>
                    <DraftImage src={catImage} alt="draft" />
                    <DraftTitle>Draft Id: {draft._id}</DraftTitle>
                    <DraftTitle>Credits: {draft.user}</DraftTitle>
                  </DraftCard>
                );
              }
              )
            ) : (
              <>
                <DraftImage src="https://media.giphy.com/media/1hMmyAXTnxxlsW2dyq/giphy.gif" alt="draft" />
                Nothing to see here but me.
              </>
            )
          }
        </DraftsSection>
        <LogoutSection>You may logout if you wish here.</LogoutSection>
        <LogoutButton />
      </Wrapper>
    </motion.div>
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
  justify-content: center;
`;

const ProfileWelcome = styled.div`
  position: relative;
  top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MemberTitle = styled.h1`
  font-size: 3rem;
`;

const MemberSubTitle = styled.h2`
  display: flex;
  align-items: center;
`;

const IconMember = styled.img`
  width: 40px;
  height: auto;
  margin-left: 10px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 15vw 0 15vw;
`;

const MemberDetails = styled.div`
  padding: 20px;
  border-radius: 5px;
  margin-right: 50px;
  cursor: pointer;
  animation: glowing 1.5s infinite;

  @keyframes glowing {
    0% {
      box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
    }
    50% {
      box-shadow: 2px 4px 5px 0px rgba(255, 255, 255, 3);
    }
    100% {
      box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 1);
    }
  }
`;
const MemberInfo = styled.h4``;

const MemberAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  background-color: #f5f5f5;
  cursor: pointer;
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const MemberInstructions = styled.div``;
const MemberText = styled.h5``;

const DraftsSection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 30vw;
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px;
  position: relative;
`;

const DraftCard = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  width: 10vw;
  height: auto;
  padding: 20px;
  margin: 0 20px 0 20px;
  box-shadow: 2px 2px 5px 4px rgba(255, 255, 255, 1);
  border-radius: 5px;
  transition: 1s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }

  &:hover {
    outline: none;
    transform: scale(1.2);
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`;
const DraftImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const DraftTitle = styled.h3``;

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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const CodePlayground = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin-bottom: 5vh;
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
