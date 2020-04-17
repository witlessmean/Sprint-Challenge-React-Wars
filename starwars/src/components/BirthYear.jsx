import React from 'react'
import styled from 'styled-components'

const StyledBirthYear = styled.div`
margin: 10px;
`;


const BirthYear = ({characterBirthYear}) => {
    //console.log(characterBirthYear)
    return (
        
        <StyledBirthYear>
          <strong> Birth year:</strong> <em>{characterBirthYear}</em>
        </StyledBirthYear>
    )
}

export default BirthYear