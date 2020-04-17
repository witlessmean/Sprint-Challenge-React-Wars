import React from 'react'
import styled from 'styled-components'

const StyledGender = styled.div`
margin: 5px;`

const Gender = ({characterGender}) => {
    //console.log(characterGender)
    return (
        <StyledGender>
            <strong>Gender:</strong> <em>{characterGender}</em>
        </StyledGender>
    )
}

export default Gender