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

            transition:all ease 0.5s;

            &:hover{
                background-color:var(--color-fade);
            }
        }
    `;

    return(
        <Container>
            <div className="btn">
                <BsTwitter />
                <span className="text">Twitter</span>
            </div>
            <div className="btn">
                <BsGithub />
                <span className="text">Github</span>
            </div>
            <div className="btn">
                <FaDev />
                <span className="text">Dev.to</span>
            </div>
        </Container>
    )
};

export default Social;