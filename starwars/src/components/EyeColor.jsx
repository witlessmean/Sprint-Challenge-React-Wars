import React from 'react'
import styled from 'styled-components'

const StyledEyeColor = styled.div`
margin: 10px;`

const EyeColor = ({characterEyeColor}) => {
    //console.log(characterEyeColor)
    return (
        <StyledEyeColor>
            <strong>Eye Color:</strong> <em>{characterEyeColor}</em>
        </StyledEyeColor>
    )
}

export default EyeColor