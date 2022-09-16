//Modules
import styled from "styled-components";

// https://api.github.com/users/wesleymaik

const Avatar = () => {
    const Content = styled.div`
        --size:128px;

        width:var(--size);
        height:var(--size);

        overflow:hidden;

        border-radius:50%;

        box-shadow:2px 2px 0 var(--color-primary);

        z-index:1;

        background-image:url('https://avatars.githubusercontent.com/u/85949116'), url('/assets/images/avatar.jpeg');
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
    `;

    return(
        <Content />
    )
};

export default Avatar;