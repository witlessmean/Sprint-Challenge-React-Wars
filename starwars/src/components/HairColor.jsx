import React from 'react'
import styled from 'styled-components'

const StyledHairColor = styled.div`
margin: 5px;
`

const HairColor = ({characterHairColor}) => {
    //console.log(characterHairColor)
    return (
        <StyledHairColor>
           <strong> Hair Color:</strong> <em>{characterHairColor}</em>
        </StyledHairColor>
    )
}

export default HairColor
