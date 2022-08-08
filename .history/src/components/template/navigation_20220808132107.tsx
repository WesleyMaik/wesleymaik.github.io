//Modules
import styled from "styled-components";

const Navigation = () => {
    const Container = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap:2em;

        padding:1em;

        z-index:10;

        a{
            padding:0.5em;
            &:hover{
                background-color:var(--color-fade);
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