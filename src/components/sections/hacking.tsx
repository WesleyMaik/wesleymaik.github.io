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
} from "react-icons/si";
import { GrMysql } from "react-icons/gr"; 

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
                <Card bg="#f6f148" text="Javascript">
                    <SiJavascript />
                </Card>
                <Card bg="#5e94f0" color="#fff" text="Typescript">
                    <SiTypescript />
                </Card>
                <Card bg="#7cdd87" text="NodeJS">
                    <SiNodedotjs />
                </Card>
                <Card bg="#e9e9e9" text="ExpressJS">
                    <SiExpress />
                </Card>
                <Card bg="#9bf5f2" text="ReactJS">
                    <SiReact />
                </Card>
                <Card bg="#b66ff9" color="#fff" text="Redux">
                    <SiRedux />
                </Card>
                <Card bg="#3e3e3e" color="#fff" text="NextJS">
                    <SiNextdotjs />
                </Card>
                <Card bg="#cb6699" color="#fff" text="Sass">
                    <SiSass />
                </Card>
                <Card bg="#42576d" color="#fff" text="PHP">
                    <SiPhp />
                </Card>
                <Card bg="#ef7343" color="#fff" text="CodeIgniter">
                    <SiCodeigniter />
                </Card>
                <Card bg="#2759ff" color="#fff" text="Wordpress">
                    <SiWordpress />
                </Card>
                <Card bg="#407dcc" color="#fff" text="MySql">
                    <GrMysql />
                </Card>
                <Card bg="#41bf50" color="#fff" text="Mongodb">
                    <SiMongodb />
                </Card>
                <Card bg="#ff8636" text="Git">
                    <SiGit />
                </Card>
                <Card bg="#fff" text="Github">
                    <SiGithub />
                </Card>
                <Card bg="#1a273e" color="#fff" text="Photoshop">
                    <SiAdobephotoshop />
                </Card>
                <Card bg="#d16609" color="#fff" text="Illustrator">
                    <SiAdobeillustrator />
                </Card>
            </div>
            <h2 className="title">/aprendendo</h2>
            <div className="wrapper">
                <Card bg="#59d0ff" text="React Native">
                    <SiReact />
                </Card>
                <Card bg="#ffe53c" text="Python">
                    <SiPython />
                </Card>
                <Card bg="#ff563f" color="#fff" text="Laravel">
                    <SiLaravel />
                </Card>
                <Card bg="#ff4489" color="#fff" text="GraphQl">
                    <SiGraphql />
                </Card>
                <Card bg="#3bdaa8" color="#fff" text="VueJS">
                    <SiVuedotjs />
                </Card>
                <Card bg="#34d3a1" color="#fff" text="NuxtJS">
                    <SiNuxtdotjs />
                </Card>
                <Card bg="#b048ff" color="#fff" text="Figma">
                    <SiFigma />
                </Card>
            </div>
        </Container>
    )
};

export default Hackings;