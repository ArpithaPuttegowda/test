import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 30px;
  color: white;
  background: green;
  border-radius: 4px;
  &:hover{
    background:red;
  }
`;

export const StyledReact=styled.h1`
background-color:${props => props.theme.colors.primary}
&>span{
    color:red;
    background:blue;
}
`

export const StyledAngular=styled.h1`
color:green
`

export const StyledVue=styled.div`
color:${({isRed})=>isRed?"red":"blue"}
`

export const StyledNode=styled.h1`
background:${(props)=>props.isBlue?"blue":""};
color:${(props)=>props.isWhite?"white":"yellow"}
`