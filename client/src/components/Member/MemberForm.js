import { useContext } from "react"; // from react

// framer motion
import { motion } from "framer-motion";

import styled from "styled-components"; // from styled-components

import { UserContext } from "../../context/UserContext"; // from context

// Member form to collect user info for mongoDB
export const MemberForm = () => {
  // get user info from context
  const { handleChange, handleuserRegistration, setAvatarImage } = useContext(UserContext);
  
  // add avatar image to user info
  const handleChoose = (e, avatarsrc) => {
    e.preventDefault();
    setAvatarImage(avatarsrc);
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Wrapper>
      <FormContainer>
        <MemberProfileForm onSubmit={handleuserRegistration}>
          <MemberProfileFormTitle>Member Profile</MemberProfileFormTitle>
          <MemberUsernameDiv>
            <MemberUserName
              type="text"
              name="username"
              required
              placeholder="username"
              onChange={handleChange}
            />
          </MemberUsernameDiv>
          <MemberFullNameDiv>
            <MemberFullName
              type="text"
              name="fullname"
              required
              placeholder="full-name"
              onChange={handleChange}
            />
          </MemberFullNameDiv>
          <MemberAvatarDiv>
          <AvatarImagesDiv>
            <AvataButton type="button" onClick={(e)=> handleChoose(e, "https://cdn.discordapp.com/attachments/978673047772991548/1007022669931233331/peep-51.png")}>
            <MemberAvatar  src="https://cdn.discordapp.com/attachments/978673047772991548/1007022669931233331/peep-51.png" />
            </AvataButton>
            <AvataButton type="button" onClick={(e)=> handleChoose(e,"https://cdn.discordapp.com/attachments/978673047772991548/1007022591527100466/peep-37.png")}>
            <MemberAvatar  src="https://cdn.discordapp.com/attachments/978673047772991548/1007022591527100466/peep-37.png" />
            </AvataButton>
            <AvataButton type="button" onClick={(e)=> handleChoose(e,"https://cdn.discordapp.com/attachments/978673047772991548/1007022590876991539/peep-39.png")}>
            <MemberAvatar  src="https://cdn.discordapp.com/attachments/978673047772991548/1007022590876991539/peep-39.png" />
            </AvataButton>
            <AvataButton type="button" onClick={(e)=> handleChoose(e,"https://cdn.discordapp.com/attachments/978673047772991548/1007022590558220338/peep-32.png")}>
            <MemberAvatar  src="https://cdn.discordapp.com/attachments/978673047772991548/1007022590558220338/peep-32.png" />
            </AvataButton>
            <AvataButton type="button" onClick={(e)=> handleChoose(e,"https://cdn.discordapp.com/attachments/978673047772991548/1007022589882925136/peep-19.png")}>
            <MemberAvatar  src="https://cdn.discordapp.com/attachments/978673047772991548/1007022589882925136/peep-19.png" />
            </AvataButton>
          </AvatarImagesDiv>
          </MemberAvatarDiv>
          <MemberEmailDiv>
            <MemberEmail
              type="email"
              name="email"
              required
              placeholder="email"
              onChange={handleChange}
            />
          </MemberEmailDiv>
          <MemberAgeDiv>
            <MemberAge
              type="number"
              name="age"
              placeholder="age"
              onChange={handleChange}
            />
          </MemberAgeDiv>
          <MemberOccupationDiv>
            <MemberOccupation
              type="text"
              name="occupation"
              placeholder="occupation"
              onChange={handleChange}
            />
          </MemberOccupationDiv>
          <MemberBioDiv>
            <MemberBio
              type="text"
              name="memberbio"
              placeholder="bio"
              onChange={handleChange}
            />
          </MemberBioDiv>
          <TermsAndConditionsDiv>
            <TermsAndConditionsCheckBox
              type="checkbox"
              name="agreed"
              required
            />
            <TermsAndConditions>
              I agree to the terms and conditions
            </TermsAndConditions>
          </TermsAndConditionsDiv>
          <RegisterButton>Submit</RegisterButton>
        </MemberProfileForm>
      </FormContainer>
    </Wrapper>
  </motion.div>
  );
};

// styled-components
const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  top: 5vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  width: 70vw;
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

const MemberProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50vw;
  margin: 0 auto;
`;
const MemberProfileFormTitle = styled.h1`
  margin: 0 0 20px;
  font-family: monospace, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: white;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  text-transform: uppercase;
`;

const MemberUsernameDiv = styled.div`
  margin: 10px 0 10px 0;
`;

const MemberUserName = styled.input`
  width: 40vw;
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

const MemberFullNameDiv = styled.div`
  margin: 10px 0 10px 0;
`;
const MemberFullName = styled.input`
  width: 40vw;
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

const MemberEmailDiv = styled.div`
  margin: 10px 0 10px 0;
`;
const MemberEmail = styled.input`
  width: 40vw;
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

const MemberAgeDiv = styled.div`
  margin: 10px 0 10px 0;
`;
const MemberAge = styled.input`
  width: 40vw;
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

const MemberAvatarDiv = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const AvataButton = styled.button`
  cursor: pointer;

  &:focus {
    border: 1px solid red;
  }

  &:hover {
    outline: none;
  }

  &:active {
    border: 1px solid red;
  }
`
const AvatarImagesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const MemberAvatar = styled.img`
  width: 40px;
  height: auto;
  border-radius: 50%;
  transition: 1s ease-in-out;
  &:hover {
    transform: scale(2);
  }

  &:active {
    box-shadow: 2px 2px 5px 0px yellow;
  }
`;

const MemberOccupationDiv = styled.div`
  margin: 10px 0 10px 0;
`;
const MemberOccupation = styled.input`
  width: 40vw;
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

const MemberBioDiv = styled.div`
  margin: 10px 0 10px 0;
`;
const MemberBio = styled.input`
  width: 40vw;
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

const TermsAndConditionsDiv = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TermsAndConditionsCheckBox = styled.input`
  margin: 10px;
`;
const TermsAndConditions = styled.p``;

const RegisterButton = styled.button`
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
