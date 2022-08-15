//Modules
import { setSession, getSession } from "./session";
import { IGithubRepos } from "../types/github";
import { IDevToArticles } from "../types/devto";

export const setGithubRepos = (data:IGithubRepos[]) => {
    if(data) setSession("github_repos", data);
};

export const getGithubRepos = () => {
    return getSession("github_repos");
};

export const setDevtoArticles = (data:IDevToArticles[]) => {
    if(data) setSession("devto_articles", data);
};

export const getDevtoArticles = () => {
    return getSession("devto_articles");
};