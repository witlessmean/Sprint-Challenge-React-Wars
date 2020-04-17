import React from "react";
import styled from "styled-components";

const StyledHeight = styled.div`
  margin: 5px;
`;

const Height = ({ characterHeight }) => {
  //console.log(characterHeight)
  return (
    <StyledHeight>
      <strong> Height: </strong> <em>{`${characterHeight}cm`}</em>
    </StyledHeight>
  );
};

export default Height;