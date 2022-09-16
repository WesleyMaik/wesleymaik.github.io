//Modules
import styled from "styled-components";
import { HTMLAttributes } from "react";

//Component
import { FaCodepen, FaDev } from 'react-icons/fa';
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram, BsBehance, BsDribbble } from 'react-icons/bs';

interface ISocial extends HTMLAttributes<HTMLDivElement>{
    names?:boolean,
    direction?:"row" | "column"
};

const Social = (props:ISocial) => {
    const Container = styled.div`
        width:100%;

        display:flex;
        flex-direction:${!props.direction ? 'row' : props.direction};
        justify-content:center;
        flex-wrap:wrap;
        gap:0.5em;

        .btn{
            cursor: pointer;

            display:flex;
            flex-direction:row;
            align-items:center;
            gap:0.5em;

            color:var(--color-primary);
            font-size:1em;

            border:1px solid var(--color-primary);
            border-radius:4px;
            padding:0.75em 1em;

            background-color:var(--bg-primary);

            z-index:10;
            
            transition:all ease 0.5s;

            &:hover{
                color:#000;
                background-color:var(--color-primary);
                border-color:none;
            }

            .text{
                width:calc(100% - 54px);
                text-align:center;
                font-family:'Roboto Mono', 'Arial';
                ${!props.names && 'display:none;'}
            }
        }
    `;

    return(
        <Container {...props}>
            <a href="https://linkedin.com/in/wesleymaik" target="_blank">
                <div className="btn">
                    <BsLinkedin />
                    <span className="text">LinkedIn</span>
                </div>
            </a>
            <a href="https://twitter.com/euwesleymaik" target="_blank">
                <div className="btn">
                    <BsTwitter />
                    <span className="text">Twitter</span>
                </div>
            </a>
            <a href="https://instagram.com/eumaik_" target="_blank">
                <div className="btn">
                    <BsInstagram />
                    <span className="text">Instagram</span>
                </div>
            </a>
            <a href="https://github.com/WesleyMaik" target="_blank">
                <div className="btn">
                    <BsGithub />
                    <span className="text">Github</span>
                </div>
            </a>
            <a href="https://dev.to/wesleymaik" target="_blank">
                <div className="btn">
                    <FaDev />
                    <span className="text">Dev.to</span>
                </div>
            </a>
            <a href="https://behance.net/wesleymaik" target="_blank">
                <div className="btn">
                    <BsBehance />
                    <span className="text">Behance</span>
                </div>
            </a>
            <a href="https://dribbble.com/wesleymaik" target="_blank">
                <div className="btn">
                    <BsDribbble />
                    <span className="text">Dribbble</span>
                </div>
            </a>
            <a href="https://codepen.io/wesleymaik" target="_blank">
                <div className="btn">
                    <FaCodepen />
                    <span className="text">Codepen</span>
                </div>
            </a>
        </Container>
    )
};

export const SocialFloat = () => {
    const Container = styled.div`
        position:fixed;
        bottom:0;
        right:0;

        margin:1em;
    `;

    return(
        <Container>
            <Social direction="column"/>
        </Container>
    )
};

export default Social;