//Modules
import { HTMLAttributes, useRef } from "react";
import styled from "styled-components";

//Components
import { TbHandClick } from "react-icons/tb"

interface IAccordionItem extends HTMLAttributes<HTMLDivElement>{
    title:string,
    subtitle?:string,
    active?:boolean
};

export const AccordionItem = (props:IAccordionItem) => {
    const Container = styled.div`
        padding:0.5em;
        margin:0.5em 0;
        overflow:hidden;

        &.active{
            .inner{
                display:block;
                height:100%;

                padding:0.5em;

                animation:fade ease 0.5s forwards;
            }

            hr{
                display:block;
            }
        }

        .title{
            cursor: pointer;

            display:flex;
            flex-direction:row;
            align-items:center;
            
            margin:0.25em 0;

            transition:all ease-out 0.25s;

            .icon{
                margin-left:auto;
            }
        }

        .subtitle{
            margin:0;
            font-weight:300;
        }

        hr{
            display:none;
        }

        .inner{
            display:none;
            
            height:0;

            transition:all ease 0.5s;

            overflow:hidden;
        }
    `;

    const accordionRef = useRef<HTMLDivElement>(null);
    const handleAccordion = () => {
        document.querySelectorAll('.accordion').forEach((element) => {
            element.classList.remove('active');
        });
        const accordionClass = accordionRef.current?.classList;
            
        accordionClass?.add('active');
    };

    return(
        <Container className={`accordion${props.active ? " active" : ""}`} ref={accordionRef} onClick={handleAccordion}>
            <h2 className="title">{ props.title } <TbHandClick className="icon" /></h2>
            { props.subtitle && <h4 className="subtitle">{ props.subtitle }</h4> }
            <hr/>
            <div className="inner">
                { props.children }
            </div>
        </Container>    
    );
};