import styled from "styled-components";

const Navigation = () => {
    const Container = styled.div`
        width:100%;

        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap:2em;

        padding:1em;
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