import { StyledButton,StyledContent,StyledFancyBtn, StyledVuejs } from "./styled"


export const ButtonComp = () => {
  return (
    <>
    <StyledButton>Click me</StyledButton>
    <StyledContent>REact</StyledContent>
    <StyledFancyBtn>Submit</StyledFancyBtn>
    <StyledVuejs isRed={false} m="10px">Vue js</StyledVuejs>
    </>
    
  )
}
