import { FancyButton, StyledButton } from "./styled"

export const ButtonComp = () => {
  return (
    <div>
       <StyledButton changeClr={false}>Click</StyledButton>
       <div><br/></div>
       <FancyButton>Click</FancyButton>
    </div>
  )
}
