//Modules
import styled from "styled-components";
import { DevtoArticles } from "../template/devto";
import { GithubRepos } from "../template/github";

const Project = () => {
    const Container = styled.div`
        padding:1em;

        .title{
            color:var(--color-primary);
        }

        .wrapper{
            display:flex;
            flex-direction:column;
            gap:5em;
        }
    `;

    return(
        <Container id="project">
            <div className="wrapper">
                <div className="repositories">
                    <GithubRepos />
                </div>
                <div className="articles">
                    <DevtoArticles />
                </div>
            </div>
        </Container>
    );
};

export default Project;