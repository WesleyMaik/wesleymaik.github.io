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

        .title{
            margin:0.25em 0;
            .icon{
                width:32px;
            }
        }
    `;

    return(
        <Header>
            <Navigation />
            <hr />
            <Avatar />
            <h1 className="title">
                <span>Wesley Maik</span>
                <img
                    className="icon"
                    src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                    style={{ display: "inline-block", margin:'0 0.5em' }}
                    data-target="animated-image.originalImage"
                />
            </h1>
            <Github />
            <hr />
            <SocialFloat />
        </Header>
    )
};

export default Header;