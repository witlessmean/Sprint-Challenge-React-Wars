import React from 'react';
import styled from 'styled-components';

const StyledName = styled.div`
margin: 5px`

const Name = ({characterName}) => {
    //console.log(characterName)
    return (
        <StyledName>
            <strong>Name:</strong> <em>{characterName}</em>
        </StyledName>
    )
}

export default Name
