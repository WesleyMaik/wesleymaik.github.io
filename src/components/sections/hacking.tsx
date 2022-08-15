//Modules
import styled from "styled-components";

//Components
import Card from "../card";
import { 
    SiAdobeillustrator, 
    SiAdobephotoshop, 
    SiCodeigniter, 
    SiExpress, 
    SiFigma, 
    SiGit, 
    SiGithub, 
    SiGraphql, 
    SiJavascript, 
    SiLaravel, 
    SiMongodb, 
    SiMysql, 
    SiNextdotjs, 
    SiNodedotjs, 
    SiNuxtdotjs, 
    SiPhp, 
    SiPython, 
    SiReact, 
    SiRedux, 
    SiSass, 
    SiTypescript, 
    SiVuedotjs, 
    SiWordpress
} from "react-icons/si"

const Hackings = () => {
    const Container = styled.div`
        color:var(--color-primary);
        padding:1em;

        .title{
            margin:1em auto;
        }
    `;

    return(
        <Container id="skills">
            <h2 className="title">/skills</h2>
            <div className="wrapper">
                <Card bg="#e7e130" text="Javascript">
                    <SiJavascript />
                </Card>
                <Card bg="#3073e7" color="#fff" text="Typescript">
                    <SiTypescript />
                </Card>
                <Card bg="#30e748" text="NodeJS">
                    <SiNodedotjs />
                </Card>
                <Card bg="#e9e9e9" text="ExpressJS">
                    <SiExpress />
                </Card>
                <Card bg="#00fff7" text="ReactJS">
                    <SiReact />
                </Card>
                <Card bg="#8400ff" color="#fff" text="Redux">
                    <SiRedux />
                </Card>
                <Card bg="#2b2b2b" color="#fff" text="NextJS">
                    <SiNextdotjs />
                </Card>
                <Card bg="#cb6699" color="#fff" text="Sass">
                    <SiSass />
                </Card>
                <Card bg="#4893e2" color="#fff" text="PHP">
                    <SiPhp />
                </Card>
                <Card bg="#ec551a" color="#fff" text="CodeIgniter">
                    <SiCodeigniter />
                </Card>
                <Card bg="#2784ff" color="#fff" text="Wordpress">
                    <SiWordpress />
                </Card>
                <Card bg="#69aaff" color="#fff" text="MySql">
                    <SiMysql />
                </Card>
                <Card bg="#13a725" color="#fff" text="Mongodb">
                    <SiMongodb />
                </Card>
                <Card bg="#ff7519" text="Git">
                    <SiGit />
                </Card>
                <Card bg="#fff" text="Github">
                    <SiGithub />
                </Card>
                <Card bg="#3e7be4" color="#fff" text="Photoshop">
                    <SiAdobephotoshop />
                </Card>
                <Card bg="#ffd000" text="Illustrator">
                    <SiAdobeillustrator />
                </Card>
            </div>
            <h2 className="title">/aprendendo</h2>
            <div className="wrapper">
                <Card bg="#84fffb" text="React Native">
                    <SiReact />
                </Card>
                <Card bg="#ffe019" text="Python">
                    <SiPython />
                </Card>
                <Card bg="#ff3419" color="#fff" text="Laravel">
                    <SiLaravel />
                </Card>
                <Card bg="#ff196d" color="#fff" text="GraphQl">
                    <SiGraphql />
                </Card>
                <Card bg="#0cb823" color="#fff" text="VueJS">
                    <SiVuedotjs />
                </Card>
                <Card bg="#099a1c" color="#fff" text="NuxtJS">
                    <SiNuxtdotjs />
                </Card>
                <Card bg="#9b19ff" color="#fff" text="Figma">
                    <SiFigma />
                </Card>
            </div>
        </Container>
    )
};

export default Hackings;