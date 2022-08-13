import { useState, useEffect, useContext } from "react"; // from react
import { NavLink } from "react-router-dom"; // from react-router-dom
import axios from "axios"; // from axios

import styled from "styled-components"; // from styled-components

import { UserContext } from "../../context/UserContext"; // from context

import Icon from "react-icons-kit"; // from react-icons-kit (Icon component)
import {trashO} from 'react-icons-kit/fa/trashO' // from react-icons-kit (Icon component)

import catimage from "../../assets/Coding Cat-logos_transparent.png"; // for default logo

// All the drafts
export const Drafts = () => {
  const [drafts, setDrafts] = useState([]);

  const {deleteDraft} = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/api/alldrafts")
      .then((res) => {
        setDrafts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <DraftsHeader>
        <DraftsTitle>Drafts here</DraftsTitle>
      </DraftsHeader>
      <DraftsBody>
        {drafts.length > 0 ? (
          drafts.map((draft) => {
            return (
              <DraftCard key={draft._id} to={`/members/drafts/${draft._id}`}>
                <DraftImage src={catimage} alt="draft" />
                <DraftTitle>Draft Id: {draft._id}</DraftTitle>
                <DraftTitle>Credits: {draft.user}</DraftTitle>
                <EditArea>
                  <DeleteButton type="submit" onClick={(e) => deleteDraft(e,draft._id)}>
                    <Icon icon={trashO} size={20}/>
                  </DeleteButton>
                </EditArea>
              </DraftCard>
            );
          })
        ) : (
          <p>No drafts yet</p>
        )}
      </DraftsBody>
    </Wrapper>
  );
};

// styled components
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

const DraftsHeader = styled.div``;
const DraftsTitle = styled.h1``;

const DraftsBody = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const DraftCard = styled(NavLink)`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 20vw;
  height: auto;
  padding: 20px;
  margin: 0 20px 0 20px;
  top: 5vh;
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
const DraftTitle = styled.h1``;
const EditArea = styled.div``
const DeleteButton = styled.button`
border-radius: 5px;
cursor: pointer;
transition: 1s ease-in-out;
  &:hover {
    outline: none;
    box-shadow: 2px 4px 7px 0px rgba(255, 255, 255, 2);
  }
`;