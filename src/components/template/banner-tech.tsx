//Modules
import styled from "styled-components";

export const Banner = () => {
    const Container = styled.div`
        opacity:25%;
        overflow:hidden;

        .tech{
            width:64px;
            height:64px;

            display:block;

            position:absolute;
            top:200%;

            transform:rotate(-45deg) scale(0.5);

            background-image:url('/assets/images/tech.png');
            background-repeat:no-repeat;

            box-shadow:0 0 8px #00000040;

            animation:move ease-out 5s infinite;

            @keyframes move {
                to{
                    top:-100%;
                    transform:rotate(45deg) scale(1.25);
                }
            }

            &.html{
                background-position:0px 0px;
            }
            &.css{
                background-position:-64px 0px;
            }
            &.js{
                background-position:-128px 0px;
            }
            &.ts{
                background-position:-192px 0px;
            }
            &.node{
                background-position:-256px 0px;
            }
            &.ex{
                background-position:-320px 0px;
            }
            &.web{
                background-position:-384px 0px;
            }
            &.react{
                background-position:-448px 0px;
            }
            &.vite{
                background-position:-512px 0px;
            }
            &.redux{
                background-position:-576px 0px;
            }
            &.next{ 
                background-position:-640px 0px;
            }
            &.vue{
                background-position:-704px 0px;
            }
            &.nuxt{
                background-position:-768px 0px;
            }
            &.sass{
                background-position:-832px 0px;
            }
            &.php{
                background-position:0px -64px;
            }
            &.laravel{
                background-position:-64px -64px;
            }
            &.mysql{
                background-position:-128px -64px;
            }
            &.mongodb{
                background-position:-192px -64px;
            }
            &.python{
                background-position:-256px -64px;
            }
            &.graphql{
                background-position:-320px -64px;
            }
            &.codepen{
                background-position:-384px -64px;
            }
            &.vercel{
                background-position:-448px -64px;
            }
            &.markdown{
                background-position:-512px -64px;
            }
            &.git{
                background-position:-576px -64px;
            }
            &.github{
                background-position:-640px -64px;
            }
            &.netlify{
                background-position:-704px -64px;
            }
            &.horuku{
                background-position:-768px -64px;
            }
            &.photoshop{
                background-position:-832px -64px;
            }
            &.illustrator{
                background-position:-896px -64px;
            }
        }
    `;

    setTimeout(() => {
        document.querySelectorAll('.tech')?.forEach((element) => {
            const left = Math.floor(Math.random() * (100 - 0 + 1) + 0),
                  delay = Math.floor(Math.random() * (10 - 0 + 1) + 0),
                  duration = Math.floor(Math.random() * (16 - 8 + 1) + 8),
                  size = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                  
            const tech = (element as HTMLDivElement);
            tech.style.left = `${left}%`;
            tech.style.animationDelay = `${delay}s`;
            tech.style.animationDuration = `${duration}s`;
            tech.dataset.size = String(size);
        });
    }, 1000);

    return(
        <Container>
            <div className="tech html" />
            <div className="tech css" />
            <div className="tech js" />
            <div className="tech ts" />
            <div className="tech node" />
            <div className="tech ex" />
            <div className="tech web" />
            <div className="tech react" />
            <div className="tech vite" />
            <div className="tech redux" />
            <div className="tech next" />
            <div className="tech vue" />
            <div className="tech nuxt" />
            <div className="tech sass" />
            <div className="tech php" />
            <div className="tech laravel" />
            <div className="tech mysql" />
            <div className="tech mongodb" />
            <div className="tech python" />
            <div className="tech graphql" />
            <div className="tech codepen" />
            <div className="tech vercel" />
            <div className="tech markdown" />
            <div className="tech git" />
            <div className="tech github" />
            <div className="tech netlify" />
            <div className="tech horuku" />
            <div className="tech photoshop" />
            <div className="tech illustrator" />
        </Container>
    )
};