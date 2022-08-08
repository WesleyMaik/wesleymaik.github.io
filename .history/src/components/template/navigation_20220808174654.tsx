//Modules
import styled from "styled-components";

//Components
import Sticky from "react-stickynode";

const Navigation = () => {
    const Container = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap:2em;

        position:fixed;

        padding:1em;

        a{
            padding:0.5em;
            border-bottom:2px solid transparent;

            &:hover{
                background-color:var(--color-fade);
                border-bottom-color:var(--color-primary);
            }

            &:active{
                color: var(--color-secundary);
            }
        }
    `;

    return(
        <Container>
            <a href="#me">Eu</a>
            <a href="#carrer">Carreira</a>
            <a href="#project">Projetos</a>
            <a href="#contact">Contato</a>
        </Container>
    )
};

export default Navigation;