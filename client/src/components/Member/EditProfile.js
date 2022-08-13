import { useContext, useState } from "react"; // from react
import { useNavigate } from "react-router-dom"; // from react-router-dom
import axios from "axios"; // from axios

import styled from "styled-components"; // from styled-components

import { useAuth0 } from "@auth0/auth0-react"; // from auth0

import { UserContext } from "../../context/UserContext"; // from context

// Edit Profile component for the user
export const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();

  const { userInfo } = useContext(UserContext);

  const [editUser, setEditUser] = useState(userInfo);

  const handleEditChange = (e) => {
    e.preventDefault();
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/members/${user.name}`, editUser)
      .then((res) => {
        if (res.status === 200) {
          navigate("/members/landing");
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <h1>Edit Profile</h1>
      <FormContainer>
        <EditProfileForm onSubmit={handleEditSubmit}>
          <EditUsername>
            <EditUsernameLabel>Username:</EditUsernameLabel>
            <Info>
              <CurrentUsername>{userInfo.username}</CurrentUsername>
              <EditUsernameInput
                type="text"
                name="username"
                placeholder="new username"
                onChange={handleEditChange}
              />
            </Info>
          </EditUsername>
          <Fullname>
            <FullnameLabel>Full Name:</FullnameLabel>
            <Info>
              <CurrentFullname>{userInfo.fullname}</CurrentFullname>
              <EditFullnameInput
                type="text"
                name="fullname"
                placeholder="new full-name"
                onChange={handleEditChange}
              />
            </Info>
          </Fullname>
          <EditOccupation>
            <EditOccupationLabel>Occupation:</EditOccupationLabel>
            <Info>
              <CurrentOccupation>{userInfo.occupation}</CurrentOccupation>
              <EditOccupationInput
                type="text"
                name="occupation"
                placeholder="new occupation"
                onChange={handleEditChange}
              />
            </Info>
          </EditOccupation>
          <EditBio>
            <EditBioLabel>Bio:</EditBioLabel>
            <Info>
              <CurrentBio>{userInfo.memberbio}</CurrentBio>
              <EditBioInput
                type="text"
                name="memberbio"
                placeholder="bio"
                onChange={handleEditChange}
              />
            </Info>
          </EditBio>
          <EditAge>
            <EditAgeLabel>Age:</EditAgeLabel>
            <Info>
              <CurrentAge>{userInfo.age}</CurrentAge>
              <EditAgeInput
                type="number"
                name="age"
                placeholder="new age"
                onChange={handleEditChange}
              />
            </Info>
          </EditAge>
          <Button>Submit</Button>
        </EditProfileForm>
      </FormContainer>
    </Wrapper>
  );
};

//styled components

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  letter-spacing: 0.05em;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  height: 70%;
  width: 40vw;
  margin-right: 20px;
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

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
`;

const EditUsername = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
  margin: 20px;
`;
const EditUsernameLabel = styled.label``;
const CurrentUsername = styled.h4``;
const EditUsernameInput = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-family: monospace;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  &:focus {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }

  &:hover {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`;

const Fullname = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
  margin: 20px;
`;
const FullnameLabel = styled.label``;
const CurrentFullname = styled.h4``;
const EditFullnameInput = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-family: monospace;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  &:focus {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }

  &:hover {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`;

const EditOccupation = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
  margin: 20px;
`;
const EditOccupationLabel = styled.label``;
const CurrentOccupation = styled.h4``;
const EditOccupationInput = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-family: monospace;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  &:focus {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }

  &:hover {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`;

const EditBio = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
  margin: 20px;
`;
const EditBioLabel = styled.label``;
const CurrentBio = styled.h4``;
const EditBioInput = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-family: monospace;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  &:focus {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }

  &:hover {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`;

const EditAge = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
  margin: 20px;
`;
const EditAgeLabel = styled.label``;
const CurrentAge = styled.h4``;
const EditAgeInput = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: white;
  font-family: monospace;
  box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 1);
  &:focus {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }

  &:hover {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`;

const Button = styled.button`
  width: 150px;
  margin-bottom: 10px;
  padding: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-family: monospace;
  font-size: 1.2rem;
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
