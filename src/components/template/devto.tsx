//Modules
import styled from "styled-components";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { IDevToArticles } from "../../types/devto";
import { getDevtoArticles, setDevtoArticles } from "../../hook/apis";

//Components
import { SiDevdotto } from "react-icons/si";

export const DevtoArticles = () => {
    const Container = styled.div`
        display:flex;
        flex-direction:column;
        gap:1em;

        .articles-wrapper{
            display:flex;
            flex-direction:column;
            gap:0.5em;

            .content{
                display:flex;
                flex-direction:row;
                gap:0.5em;
    
                border:1px solid #00000040;
                border-radius:8px;
    
                background-color:#34273b;
    
                overflow:hidden;
    
                transition:all ease 0.5s;
    
                &:active{
                    transform:scale(0.95);
                }
    
                .image{
                    min-width:25%;
    
                    background-position:center;
                    background-repeat:no-repeat;
                    background-size:cover;
                }
    
                .info{
                    padding:1em;
    
                    .title, .description, .url{
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow:hidden;
    
                        color:#fff;
                        margin:0;
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
    const savedArticles = getDevtoArticles();
    //Devto Articles
    const [articles, setArticles] = useState<IDevToArticles[] | null>(savedArticles || null);
    //UseEffect
    useEffect(() => {
        if(!Boolean(savedArticles)){
            api.get("https://dev.to/api/articles?username=wesleymaik;per_page=3")
            .then((response) => {
                const result = response.data as IDevToArticles[];
                setArticles(result);
                setDevtoArticles(result);
            })
            .catch((err) => {
                console.log(err.response.data.message);
            });
        };
    }, [articles])

    return(
        <>
            <Container id="articles">
                <h2 className="title">/artigos <SiDevdotto /></h2>
                <div className="articles-wrapper">
                    {
                        articles && articles.map((articles, key) => {
                            const title = articles.title,
                                description = articles.description,
                                image = articles.cover_image,
                                url = articles.url;

                            return(
                                <a href={url} target="_blank" className="content" key={key}>
                                    <div className="image" style={{backgroundImage: `url("${image}")`}}/>
                                    <div className="info">
                                        <h2 className="title">{ title }</h2>
                                        <h4 className="description">{ description }</h4>
                                        <p className="url">{ url }</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                    <a href="https://dev.to/wesleymaik" target="_blank" className="content">
                        <div className="info full">
                            <h4 className="title center">Ver todos os artigos</h4>
                        </div>
                    </a>
                </div>
            </Container>
        </>
    );
};