//Modules
import styled from "styled-components";

// https://api.github.com/users/wesleymaik

const Avatar = () => {
    const Content = styled.div`
        width:250px;
        height:250px;

        overflow:hidden;

        border:6px solid #fff;
        border-radius:12%;

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