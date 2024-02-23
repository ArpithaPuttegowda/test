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
import { RenderSpans } from "./Components/ListAndKeys/RenderSpans";
import { RenderComments } from "./Components/ListAndKeys/RenderComments";
import { RenderUsers } from "./Components/ListAndKeys/RenderUsers";
import { RenderTable } from "./Components/ListAndKeys/RenderTable";
import { ReverseData } from "./Components/ListAndKeys/ReverseData";
import { ReusuableOrderedList } from "./Components/ReusableComponents/ReusuableOrderedList";

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
      {/* <RenderPosts/> */}
      {/* <RenderSpans/> */}
      {/* <RenderComments/> */}
      {/* <RenderUsers/> */}
      {/* <RenderTable/> */}
      {/* <ReverseData/> */}
      <ReusuableOrderedList/>
      </ThemeProvider>
    </div>
  );
};

export default App;

