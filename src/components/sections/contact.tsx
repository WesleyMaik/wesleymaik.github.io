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
                border-radius:2px;
                font-size:1.25em;
            }
        }
    `;

    return(
        <Container id="contact">
            <h2 className="title">/contato</h2>
            <div className="wrapper">
                <a href="mailto:wesleynamikaze404@gmail.com" target="_blank">
                    <Card className="card" bg="#da315b" color="#fff"><FiAtSign /> E-mail</Card>
                </a>
                <a href="https://t.me/wesleymaik" target="_blank">
                    <Card className="card" bg="#31A4DA" color="#fff"><SiTelegram /> Telegram</Card>
                </a>
                <a href="https://linkedin.com/in/wesleymaik" target="_blank">
                    <Card className="card" bg="#3175da" color="#fff"><SiLinkedin /> Linkedin</Card>
                </a>
            </div>
        </Container>
    )
};