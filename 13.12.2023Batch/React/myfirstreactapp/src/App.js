import "./App.css"
import { theme } from "./Components/theme";
import { ThemeProvider } from "styled-components";
import { ButtonComp } from "./Components/StyledComponents/ButtonComp/ButtonComp";
import { ButtonStyled } from "./Components/StyledComponents/ButtonStyled";
import GlobalStyle from "./Components/globalStylings";
import { BtnGlobal } from "./Components/StyledComponents/ButtonForGlobal/BtnGlobal";
import { RenderPlayers } from "./Components/ListAndKeys/RenderPlayers";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <ButtonStyled/>
      <ButtonComp/>
      <BtnGlobal/>
      <RenderPlayers/>
      </ThemeProvider>
    </div>
  );
};

export default App;

