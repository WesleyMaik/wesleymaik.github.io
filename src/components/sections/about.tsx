//Modules
import styled from "styled-components";

const AboutMe = () => {
    const Container = styled.div`
        width:100%;

        color:var(--bg-primary);
        background-color:var(--color-primary);

        padding:1em;

        font-size:1.125em;

        .wrapper{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;

            .text *{
                font-family:'Poppins', 'Arial';
            }

            @media screen and (max-width:768px) {
                flex-direction:column;
            }

            .heading{
                font-size:1.125em;
                font-weight:600;
            }

            strong{
                color:var(--color-primary);
                background-color:var(--bg-primary);
                padding:0 0.25em;
            }
        }
    `;
    
    return(
        <Container id="me">
            <h2 className="title">/eu</h2>
            <div className="wrapper">
                <div className="img">
                    <img src="/assets/images/illustration.png" alt="Avatar representativo do Wesley Maik" width={350}/>
                </div>
                <div className="text">
                    <p>
                        <span className="heading">Olá, meu nome é Wesley Maik</span> e eu amo criar soluções para a web. Meu interesse na programação começou
                        em meados de 2020, quando o sistema da empresa no qual eu atuava, me incomodava por ser incompleto
                        para minha função. O que era só para editar alguns botões e formulários, me ensinou muito sobre HTML, CSS e Javascript.
                    </p>
                    <p>
                        <span className="heading">Depois de muito estudo</span> comecei a entender como trabalhar com Javascript Avançado, Typescript, Node, PHP, frameworks 
                        e eventualmente ingressei totalmente na área conseguindo meu primeiro trabalho como desenvolvedor Front-End em uma empresa de Softwares da minha cidade, 
                        no qual tive a chance de estar à frente de um sistema de delivery utilizando <strong>Typescript</strong>, <strong>React</strong> &#38; <strong>Next.js</strong>.
                    </p>
                    <p>
                        <span className="heading">Meu foco hoje</span> é aprimorar meus estudos para me tornar um desenvolvedor Full Stack para 
                        contruir produtos mais acessíveis com experiência de usuários inclusiva, modernas e desenvolver aplicativos que impactem 
                        positivamente empresas e pessoas.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default AboutMe;