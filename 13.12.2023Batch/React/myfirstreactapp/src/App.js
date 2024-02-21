import "./App.css"
import { theme } from "./Components/theme";
import { ThemeProvider } from "styled-components";
import { ButtonComp } from "./Components/StyledComponents/ButtonComp/ButtonComp";
import { ButtonStyled } from "./Components/StyledComponents/ButtonStyled";
import GlobalStyle from "./Components/globalStylings";
import { BtnGlobal } from "./Components/StyledComponents/ButtonForGlobal/BtnGlobal";
import { RenderPlayers } from "./Components/ListAndKeys/RenderPlayers";
import { RenderColours } from "./Components/ListAndKeys/RenderColours";
import { RenderColour, RenderFlowers } from "./Components/ListAndKeys/RenderingClrOl";
import { RenderCountries } from "./Components/ListAndKeys/RenderCountries";
import { RenderProducts } from "./Components/ListAndKeys/RenderProducts";
import { RenderPosts } from "./Components/ListAndKeys/RenderPosts";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      {/* <GlobalStyle/>
      <ButtonStyled/>
      <ButtonComp/>
      <BtnGlobal/>
      <RenderPlayers/> */}
      {/* <RenderFlowers/> */}
      {/* <RenderCountries/> */}
      {/* <RenderProducts/> */}
      <RenderPosts/>
      </ThemeProvider>
    </div>
  );
};

export default App;

