//Modules
import styled from "styled-components";

//Components
import Sticky from "react-stickynode";
import { useRef } from "react";

const Navigation = () => {
    const Container = styled.div`
        max-width:100% !important;
        width:100%;
        
        z-index:10;

        .sticky{
            width:100%;
            height:100%;

            .inner{
                position:fixed;
                transform:none !important;
            }

            .wrapper{
                display:flex;
                flex-direction:column;
                justify-content:right;
                align-items:right;
                gap:2em;
    
                padding:1em;
    
                .icon{
                    cursor: pointer;
                    user-select:none;

                    margin-left:auto;
    
                    background-color:var(--color-primary);
                    padding:0.5em 0.6em;
    
                    border:1px solid var(--bg-primary);
                    border-radius:50%;

                    z-index:10;

                    transition:all 0.25s ease-out;
                    &:active{
                        transform:scale(0.95) rotate(12.25deg);
                    }
                }
    
                .menu{
                    max-width:768px;
                    width:100%;
                    height:100%;

                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    gap:1em;

                    position:fixed;
                    top:0;
                    right:0;

                    background-color:var(--color-primary);

                    animation:unreveal-menu ease-in 0.5s forwards;

                    &.active{
                        animation:reveal-menu ease-out 0.5s forwards;
                    }

                    a{
                        color:var(--bg-primary);

                        padding:0.5em;
                        border-bottom:2px solid transparent;

                        font-size:1.125em;
                        
                        &:active{
                            color: var(--color-secundary);
                        }
                    }
                }
            }
        }
    `;

    const menuRef = useRef<HTMLDivElement>(null),
    handleHamburger = () => {
        const menuClass = menuRef.current?.classList,
                classList = menuClass?.value.split(' ');

        menuClass?.remove('hidden');

        if(classList?.find(className => className == "active")){
            menuClass?.remove('active');
        }else{
            menuClass?.add('active');
        };
    },
    closeHamburger = () => {
        menuRef.current?.classList?.remove('active');
    };

    return(
        <Container>
            <Sticky top={0} className='sticky' innerClass='inner'>
                    <div className="wrapper">
                        <div className="icon" onClick={handleHamburger}>
                            <img src="/assets/icon/hamburger-emoji.png" width={48} height={48}/>
                        </div>
                        <div className="menu hidden" ref={menuRef}>
                            <a href="#me" onClick={closeHamburger}>Eu</a>
                            <a href="#tech" onClick={closeHamburger}>Skills</a>
                            <a href="#carrer" onClick={closeHamburger}>Carreira</a>
                            <a href="#project" onClick={closeHamburger}>Projetos</a>
                            <a href="#contact" onClick={closeHamburger}>Contato</a>
                        </div>
                    </div>
            </Sticky>
        </Container>
    )
};

export default Navigation;