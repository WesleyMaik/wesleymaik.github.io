//Modules
import styled from "styled-components";

export const Footer = () => {
    const Container = styled.div`
        margin:0;
        background-color:#000;

        text-align:center;

        padding:1em;

        font-size:0.85em;
        
        .message{
            font-family:'Roboto Mono';
        }
    `;
    
    return(
        <Container>
            <p className="message">Made with <img src="/assets/icon/heart-emoji.png" width={16} /> by Wesley Maik</p>
        </Container>
    );
};