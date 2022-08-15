//Modules
import styled from "styled-components";

//Components
import { AccordionItem } from "../ui/accordion";

const Work = () => {
    const Container = styled.div`
        color:var(--bg-primary);
        background-color:var(--color-primary);

        padding:1em;

        .content{
            .accordion{
                color:var(--color-default);
                background-color:var(--color-secundary);

                border-radius:4px;

                p{
                    font-family:monospace;
                    font-size:1.125em;
                    margin:0;
                }

                ul{
                    padding-left:1em;
                    margin:0.25em 0;

                    li{
                        margin:1em 0;
                    }
                }
            }
        }
    `;

    return(
        <Container id="carrer">
            <div className="content">
            <h2 className="title">/carreira</h2>
            <AccordionItem title="Controller Softwares" subtitle="Desenvolvedor Front-end" className="accordion" active>
                <p>Março/2022 - Presente</p>
                <br />
                <ul>
                    <li>
                        Fui responsável por desenvolver e coordenar o front-end do produto Delivery web da empresa, o AoPonto Delivery.
                        Utilizando as tecnologias Node, Typescript, Next.js etc, foi pensado em um UI/UX moderno e intuitivo
                        valorizando as demandas dos clientes e estabelecimentos.
                    </li>
                </ul>
            </AccordionItem>
            <AccordionItem title="GSTec - Tec. p. Laboratório" className="accordion">
                <p>Agente Publicitário | Janeiro/2021 - Março/2022</p>
                <br />
                <ul>
                    <li>
                        Desenvolvi rotinas publicitárias para divulgação dos produtos.
                    </li>
                    <li>
                        Criação e administração de site em Wordpress para atração de leads e publicidade.
                    </li>
                    <li>
                        Desenvolvimento de CMS para a organização de serviços e produtos, conectado com o site da empresa, utilizando
                        PHP com CodeIgniter4 e Javascript.
                    </li>
                </ul>
                <hr/>
                <p>Estagiário | Setembro/2019 - Janeiro/2021</p>
                <br />
                <ul>
                    <li>
                        Ajudei com documentação e emissão de certificados de serviço, organização de processos internos e gerenciamento
                        de clientes e serviços sob sistema web próprio.
                    </li>
                    <li>
                        Iniciei meus primeiros passos na programação editando campos, botões e funcões, utilizando HTML, CSS e Javascript.
                    </li>
                </ul>
            </AccordionItem>
            </div>
        </Container>
    )
};

export default Work;