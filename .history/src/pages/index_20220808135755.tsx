//Modules
import styled from "styled-components";
import { reveal } from 'scrollreveal';

//Components
import Header from "../components/template/header";

const App = () => {
    const Main = styled.main`
      max-width:800px;

      position:relative;

      margin:auto;
    `;

    // reveal('*', 500);

    return(
      <Main>
        <Header />
      </Main>
    );
};

export default App
