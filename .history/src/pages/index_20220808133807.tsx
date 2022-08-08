//Modules
import styled from "styled-components";
import Header from "../components/template/header";

const App = () => {
    const Main = styled.main`
      max-width:800px;

      position:relative;

      margin:auto;
    `;

    return(
      <Main>
        <Header />
      </Main>
    )
};

export default App