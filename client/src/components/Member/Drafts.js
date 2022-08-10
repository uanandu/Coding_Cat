import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";


export const Drafts = () => {

    const [drafts, setDrafts] = useState([]);

    useEffect(() => {
        axios.get("/api/drafts")
            .then(res => {
                setDrafts(res.data.data);
            })
            .catch(err => {
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
          drafts.map(draft => {
            return (
                <DraftCard key={draft._id}>
                    <DraftImage src={draft.image} alt="draft" />
                    <DraftTitle>{draft.title}</DraftTitle>
                    <DraftInfo>{draft.body}</DraftInfo>
                </DraftCard>
            )
        })  
        ) : ( 
            <p>No drafts yet</p>
        )
        
        }
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

const DraftsBody = styled.div``;

const DraftCard = styled.div``;
const DraftImage = styled.img``;
const DraftTitle = styled.h1``;
const DraftInfo = styled.p``;
