import styled from "styled-components";

const Navigation = () => {
    const Container = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:left;
        gap:2em;

        position:fixed;
        left:0;

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