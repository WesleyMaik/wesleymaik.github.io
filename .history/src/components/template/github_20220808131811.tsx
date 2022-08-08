//Modules
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";

//Components
import { TiLocation } from 'react-icons/ti';
import { getGithubStats, getSession, setGithubStats, setSession } from "../../hook/session";

export interface IGithub { 
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: string;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
};
  

const gitInfo = {};

const Github = () => { 
    const Container = styled.div`
        width:100%;

        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:0.5em;

        .location{
            .title{
                color:#d3d3d380;
            }
        }

        .info{ 
            width:100%;

            display:flex;
            flex-direction:row;
            gap:0.5em;


            .card{
                width:100%;

                display:flex;
                align-items:center;
                flex-direction:column;
                gap:0.5em;

                padding:1em;

                background-color:var(--color-fade);

                border-radius:4px;

                *{
                    margin:0;
                }

                .title{
                    font-weight:300;
                }
            }
        }
    `;

    const savedData = getGithubStats();

    const [data, setData] = useState<IGithub | null>(savedData || null),
          handleData = useCallback((data:IGithub) => {
            setData(data);
          }, [data])

    useEffect(() => {
        if(!Boolean(savedData)){
            api.get('https://api.github.com/users/wesleymaik')
            .then((response) => {
                const result = response.data as IGithub;
                handleData(result);
                setGithubStats(result)
            })
            .catch((err) => {
                console.log(err);
            });
        };
    });

    return(
        <Container>
            {
                data && 
                <>
                <div className="location">
                    { 
                        data?.location && 
                        <p className="title"><TiLocation className="icon" />{ data?.location }</p>
                    }
                </div>
                <div className="info">
                    <div className="card">
                        <h2 className="text">{ data?.public_repos }</h2>
                        <h5 className="title">Repositórios</h5>
                    </div>
                    <div className="card">
                        <h2 className="text">{ data?.followers }</h2>
                        <h5 className="title">Seguidores</h5>
                    </div>
                    <div className="card">
                        <h2 className="text">{ data?.following }</h2>
                        <h5 className="title">Seguindo</h5>
                    </div>
                </div>
                </>
            }
        </Container>
    )
};

export default Github;