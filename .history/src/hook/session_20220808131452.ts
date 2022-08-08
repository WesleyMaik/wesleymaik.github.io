//Modules
import { IGithub } from "../components/template/github";

export const setSession = (key:string, data:string | number) => {
    const value = JSON.stringify(data);
    sessionStorage.setItem(key, value);
};

export const getSession = (key:string) => {
    const value = JSON.parse(String(sessionStorage.getItem(key))) || null;
    return value;
};

export const getGithubStats = () => {
    return getSession('github_stats') as IGithub;
};