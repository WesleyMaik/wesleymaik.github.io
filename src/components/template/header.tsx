//Modules
import styled from "styled-components";

//Component
import Avatar from "../avatar";
import { Banner } from "./banner-tech";
import Navigation from "./navigation";
import Social from "./social";

const Header = () => {
    const Header = styled.header`
        width:100%;
        min-height:20em;

        display:flex;
        flex-direction:column;
        align-items:center;
        gap:0.5em;

        position:relative;

        padding:0.5em;

        overflow:hidden;

        margin:0;

        .head{
            width:100%;
            .inner{
                width:100%;

                display:flex;
                flex-direction:column;
                justify-content:flex-start;
                align-items:center;
                gap:1em;

                .text{
                    z-index:1;
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

                    padding:0.75em 1em;

                    border-radius:50px;
                    background-color:var(--color-primary);
                }
            }
        }
    `;

    return(
        <Header>
            <Navigation />
            <div className="head">
                <div className="inner">
                    <Banner />
                    <Avatar />
                    <div className="text">
                        <h3 className="subtitle">
                            <span>Olá, Eu sou</span>
                        </h3>
                        <h1 className="title">
                            <span>Wesley Maik</span>
                            <img
                                className="icon"
                                src="/assets/icon/wave.gif"
                                style={{ display: "inline-block", margin:'0 0.25em' }}
                            />
                        </h1>
                        <p className="paragraph">
                            <strong>Front-end Developer + UI Design </strong>
                            <img src='/assets/icon/technologist-emoji.png' style={{maxWidth:'32px'}}/>
                            <p
                                style={{maxWidth:'384px', color:'#fff'}}
                            >Amo criar produtos digitais sólidos e escaláveis com ótimas experiências de usuário.</p>
                        </p>
                    </div>
                </div>
            </div>
            <Social names direction="column" />
        </Header>
    )
};

export default Header;