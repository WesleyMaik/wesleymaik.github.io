//Modules
import styled from "styled-components";

//Component
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';
import { HTMLAttributes } from "react";

interface ISocial extends HTMLAttributes<HTMLDivElement>{
    name?:boolean,
    direction?:"row" | "column"
};

const Social = (props:ISocial) => {
    const Container = styled.div`
        width:100%;

        display:flex;
        flex-direction:${!props.direction ? 'row' : props.direction};
        justify-content:center;
        gap:0.5em;

        z-index:10;

        .btn{
            cursor: pointer;

            display:flex;
            flex-direction:row;
            gap:0.5em;

            color:var(--color-primary);
            font-size:1.25em;

            border:1px solid var(--color-primary);
            border-radius:4px;
            padding:0.5em 1em;

            &:hover{
                background-color:var(--color-fade);
            }

            .text{
                ${!props.name && 'display:none;'}
            }
        }
    `;

    return(
        <Container {...props}>
            <a href="https://twitter.com/euwesleymaik" target="_blank">
                <div className="btn">
                    <BsTwitter />
                    <span className="text">Twitter</span>
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
        </Container>
    )
};

export const SocialFloat = () => {
    const Container = styled.div`
        position:fixed;
        bottom:0;
        left:0;

        margin:1em;
    `;

    return(
        <Container>
            <Social direction="column"/>
        </Container>
    )
};

export default Social;