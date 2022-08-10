//Modules
import styled from "styled-components";

//Components
import Header from "../components/template/header";
import AboutMe from "../components/sections/about";

const App = () => {
    const Main = styled.main`
      max-width:800px;

      position:relative;

      margin:auto;
    `;

    return(
      <Main className="test">
        <Header />
        <AboutMe />
      </Main>
    );
};

export default App
