import styled from "styled-components"

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color:${(props)=>props.changeClr?"red":""};
  }
`;

export const FancyButton=styled(StyledButton)`
background: linear-gradient(to right,red,yellow);
font-family:${props=>props.theme.fonts.heading}
`