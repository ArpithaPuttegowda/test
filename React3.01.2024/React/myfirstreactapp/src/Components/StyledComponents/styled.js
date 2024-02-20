import styled from 'styled-components';

// Create a styled component
export const StyledButton = styled.button`
background-color: #007bff;
color: #ffffff;
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
  background-color: pink;
}
`;


export const StyledContent=styled.h1`
color:red;
background:green
`


export const StyledFancyBtn=styled(StyledButton)`
background:linear-gradient(red,green,pink)
`

export const StyledVuejs=styled.div`
color:${(props)=>props.isRed?"red":"blue"};
margin:${props=>props.m?props.m:"20px"}
`