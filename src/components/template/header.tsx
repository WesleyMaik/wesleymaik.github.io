//Modules
import styled from "styled-components";

//Component
import Avatar from "../avatar";
import Github from "./github";
import Navigation from "./navigation";
import { SocialFloat } from "./social";

const Header = () => {
    const Header = styled.header`
        width:100%;
        min-height:20em;

        display:flex;
        flex-direction:column;
        align-items:center;
        gap:0.5em;

        padding:0.5em;
        margin:1em 0;

        .head{
            width:100%;
            min-height:30em;

            display:flex;
            flex-direction:row;
            justify-content:space-evenly;
            align-items:center;
            gap:1em;

            @media screen and (max-width:768px){
                flex-direction:column;
            }

            .icon{
                width:32px;
            }

            .title{
                margin:0.25em 0;
                font-size:3em;
            }

            .subtitle{
                margin:0;
            }

            .paragraph{
                color:var(--color-primary);
            }

            .contact-me{
                font-size:1em;

                padding:0.75em;

                border-radius:50px;
                background-color:var(--color-primary);
            }
        }
    `;

    return(
        <Header>
            <Navigation />
            <hr />
            <div className="head">
                <Avatar />
                <div className="text">
                    <h3 className="subtitle">
                        <span>Olá, Eu sou</span>
                    </h3>
                    <h1 className="title">
                        <span>Wesley Maik</span>
                        <img
                            className="icon"
                            src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                            style={{ display: "inline-block", margin:'0 0.25em' }}
                        />
                    </h1>
                    <p className="paragraph">
                        <strong>UI Design + Front-end Developer</strong>
                            <img src='/assets/icon/technologist-emoji.png' style={{maxWidth:'32px'}}/>
                        <p
                            style={{maxWidth:'250px', color:'#fff'}}
                        >Amo criar produtos front-end sólidos e escaláveis com ótimas experiências de usuário.</p>
                    </p>
                    <button className="contact-me">Contate-me</button>
                </div>
            </div>
            <hr />
            <SocialFloat />
        </Header>
    )
};

export default Header;