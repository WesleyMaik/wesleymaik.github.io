import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ICardProps extends HTMLAttributes<HTMLDivElement>{
    color?:string,
    bg?:string
    text?:string,
};

const Card = (props:ICardProps) => {
    const Container = styled.div`
        width:fit-content;

        display:inline-block;

        margin:0.25em;

        overflow:hidden;

        .inner{
            display:flex;
            justify-content:center;
            align-items:center;
            gap:0.5em;

            padding:0.5em;

            color:${ Boolean(props.color) ? props.color : "#000" };
            background-color:${ Boolean(props.bg) ? props.bg : "#fff" };
        }
    `;

    return(
        <Container {...props}>
            <div className="inner">
                { props.children }
                { props.text && <span className="text">{ props.text }</span> }
            </div>
        </Container>
    )
};

export default Card;