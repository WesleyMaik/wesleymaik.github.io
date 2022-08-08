//Modules
import styled from "styled-components";

//Component
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';

const Social = () => {
    const Container = styled.div`
        width:100%;

        display:flex;
        flex-direction:row;
        justify-content:center;
        gap:0.5em;

        .btn{
            cursor: pointer;
            color:var(--color-primary);
            border:1px solid var(--color-primary);
            border-radius:4px;
            padding:0.5em 1em;
        }
    `;

    return(
        <Container>
            <div className="btn">
                <BsTwitter />
            </div>
            <div className="btn">
                <BsGithub />
            </div>
            <div className="btn">
                <FaDev />
            </div>
        </Container>
    )
};

export default Social;