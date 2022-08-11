//Modules
import styled from "styled-components";

//Components
import Header from "../components/template/header";
import AboutMe from "../components/sections/about";
import Hackings from "../components/sections/hacking";
import Work from "../components/sections/work";

const App = () => {
    const Main = styled.main`
      margin:auto;

      > * {
        margin:2em 0;
        > *{
          max-width:800px;
          margin:auto;
        }
      }
    `;

    return(
      <Main>
        <Header />
        <AboutMe />
        <Hackings />
        <Work />
      </Main>
    );
};

export default App
