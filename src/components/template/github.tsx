//Modules
import styled from "styled-components";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { IGithubRepos } from "../../types/github";
import { getGithubRepos, setGithubRepos } from "../../hook/apis";

//Components
import { SiGithub } from "react-icons/si";

export const GithubRepos = () => {
    const Container = styled.div`
        .repos-wrapper{
            display:flex;
            flex-direction:column;
            gap:0.5em;

            .content{
                display:flex;
                flex-direction:row;
                gap:1em;

                border:1px solid #00000040;
                border-radius:8px;

                background-color:#3b3b3b;

                overflow:hidden;

                transition:all ease 0.5s;

                &:active{
                    transform:scale(0.95);
                }

                .icon{
                    display:flex;
                    align-items:center;

                    color:#fff;
                    background-color:#222222;

                    padding:1.5em;
                }

                .info{
                    padding:1em 0;

                    .title, .description, .url{
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow:hidden;

                        color:#fff;
                        margin:0;
                    }

                    .description{
                        font-weight:300;
                    }

                    .url{
                        font-size:0.75em;
                        color:#8b8b8b;
                    }
                }
            }
            .full{
                .title{
                    font-weight:300;
                }
            }
        }
    `;
    
    //Saved repos to prevent rated limit api's call
    const savedRepos = getGithubRepos();
    //Github Repos
    const [repos, setRepos] = useState<IGithubRepos[] | null>(savedRepos || null);
    //UseEffect
    useEffect(() => {
        if(!Boolean(savedRepos)){
            api.get('https://api.github.com/users/wesleymaik/repos?sort=created&direction=desc')
            .then((response) => {
                const result = response.data as IGithubRepos[],
                      withoutThisPage = result.filter(repo => repo.name != "wesleymaik.github.io");
                setRepos(withoutThisPage);
                setGithubRepos(withoutThisPage)
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
        }
    }, [repos])

    return(
        <Container>
            <h2 className="title">/projetos <SiGithub /></h2>
            <div className="repos-wrapper">
                {
                    repos && repos.slice(0, 3).map((repo, key) => {
                        //GH config
                        const title = repo.name,
                            description = repo.description,
                            hasPage = repo.has_pages,
                            url = !Boolean(hasPage) ? repo.html_url : `https://wesleymaik.github.io/${title.toLowerCase()}`;

                        return(
                            <a href={url} target="_blank" key={key} className="content" data-highlight={String(hasPage)}>
                                <div className="icon">
                                    <SiGithub />
                                </div>
                                <div className="info">
                                    <h2 className="title">{ title }</h2>
                                    <h5 className="description">{ description }</h5>
                                    <p className="url">{ url }</p>
                                </div>
                            </a>
                        )
                    })
                }
                <a href="https://github.com/WesleyMaik?tab=repositories" target="_blank" className="content">
                    <div className="info full">
                        <h4 className="title center">Ver todos os projetos</h4>
                    </div>
                </a>
            </div>
        </Container>
    );
};