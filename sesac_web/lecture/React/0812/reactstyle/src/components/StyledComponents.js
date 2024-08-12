import React from 'react'
import styled from 'styled-components'

const StyledContainer= styled.div`
  display: flex;
`;
const StyledBox = styled.div`
  
  width: 100px;
  height: 100px;
  background-color: ${(props)=>props.bgColor ||'blue'};

`;


const StyledComponents = () => {
  return (
    <>
      <StyledContainer>
        <StyledBox bgColor="red">1</StyledBox>
        <StyledBox bgColor="yellow">2</StyledBox>
        <StyledBox bgColor="green">3</StyledBox>
        <StyledBox>4</StyledBox>
      </StyledContainer>
    </>
  )
}

export default StyledComponents