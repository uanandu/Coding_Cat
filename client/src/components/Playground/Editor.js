import styled from "styled-components";
import { useState, useEffect } from "react";

export const Editor = ({ displayName, placeHolder, onChange, language }) => {
  // state
  const [open, setOpen] = useState(true);

  const hancleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };
  useEffect(() => {
    return () => {
      document.removeEventListener("keydown", handleChange);
    };
  }, [handleChange]);

  return (
    <>
      <Wrapper
      // style={{
      //   flexGrow: open ? "1" : "0",
      // }}
      >
        <TitleArea>
          <Title>
            <TitleText>{displayName}</TitleText>
            <TitleIcon></TitleIcon>
          </Title>
          <CollapseButton>Collapse 🤛🏽</CollapseButton>
        </TitleArea>
        <InputTextArea
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder={placeHolder}
        />
      </Wrapper>
    </>
  );
};

// styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  align-items: center;
`;

const Title = styled.div`
  background-color: white;
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px 0 0 0;
`;

const TitleText = styled.h3``;

const TitleIcon = styled.img``;

const InputTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const CollapseButton = styled.button`
  border-radius: 10px;
  width: 100px;
  font-weight: 700;
`;
