//Modules
import styled from "styled-components";
import ScrollReaveal from 'scrollreveal';

//Components
import Header from "../components/template/header";

const App = () => {
    const Main = styled.main`
      max-width:800px;

      position:relative;

      margin:auto;
    `;

    ScrollReaveal().reveal('*')

    return(
      <Main>
        <Header />
      </Main>
    );
};

export default App
