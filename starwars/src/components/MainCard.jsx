import React from "react";
import BirthYear from "./BirthYear";
import EyeColor from "./EyeColor";
import Gender from "./Gender";
import HairColor from "./HairColor";
import Height from "./Height";
import Name from "./Name";
import styled from "styled-components";

const StyledMainCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  height: auto;
  width: 60vw;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  margin-left: 320px;
`;

const MainCard = ({ characterData }) => {
  //console.log(characterData)

  return (
    <StyledMainCard>
      <Name characterName={characterData.name} />
      <Gender characterGender={characterData.gender} />
      <BirthYear characterBirthYear={characterData.birth_year} />
      <Height characterHeight={characterData.height} />
      <EyeColor characterEyeColor={characterData.eye_color} />
      <HairColor characterHairColor={characterData.hair_color} />
    </StyledMainCard>
  );
};

export default MainCard;
