//Modules
import styled from "styled-components";

// https://api.github.com/users/wesleymaik

const Avatar = () => {
    const Content = styled.div`
        width:250px;
        height:250px;

        overflow:hidden;

        border-radius:25%;

        /* box-shadow:5px 5px 0 var(--color-primary); */

        .img{
            width:100%;
            height:100%;
        }
    `;

    return(
        <Content>
            <img className="img" src="https://avatars.githubusercontent.com/u/85949116?v=4"/>
        </Content>
    )
};

export default Avatar;