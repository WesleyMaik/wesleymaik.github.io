//Modules
import styled from "styled-components";

//Components
import Card from "../card";
import { FiAtSign } from "react-icons/fi";
import { SiLinkedin, SiTelegram } from "react-icons/si";

export const Contact = () => {
    const Container = styled.div`
        padding:1em;

        color:var(--bg-primary);
        background-color:var(--color-primary);

        .wrapper{
            margin:2em auto;

            .card{
                font-size:1.125em;
                border:1px solid #000;
            }
        }
    `;

    return(
        <Container id="contact">
            <h2 className="title">/contato</h2>
            <div className="wrapper">
                <a href="mailto:wesleynamikaze404@gmail.com" target="_blank">
                    <Card className="card" bg="transparent" color="#000"><FiAtSign /> E-mail</Card>
                </a>
                <a href="https://t.me/wesleymaik" target="_blank">
                    <Card className="card" bg="transparent" color="#000"><SiTelegram /> Telegram</Card>
                </a>
                <a href="https://linkedin.com/in/wesleymaik" target="_blank">
                    <Card className="card" bg="transparent" color="#000"><SiLinkedin /> Linkedin</Card>
                </a>
            </div>
        </Container>
    )
};