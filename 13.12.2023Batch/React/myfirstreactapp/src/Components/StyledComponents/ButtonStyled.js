import { useState } from "react";
import {
  StyledButton,
  StyledReact,
  StyledAngular,
  StyledVue,
  StyledNode,
} from "./styled";

export const ButtonStyled = ({ isBlue }) => {
  const [isRed, setIsRed] = useState(false);
  return (
    <>
      <StyledButton>ButtonStyled</StyledButton>
      <StyledReact>
        React
        <span>Pune</span>
        <span>Hyderabad</span>
      </StyledReact>
      <StyledAngular>Angular</StyledAngular>
      {/* <div style={{ color: isRed ? "red" : "blue" }}>Vue js</div> */}
      <StyledVue isRed>Vue js</StyledVue>
      {/* <h1 style={{background:isBlue?"blue":""}}>Nodejs</h1> */}
      <StyledNode isBlue={isBlue} isWhite={false}>
        Node
      </StyledNode>
    </>
  );
};
