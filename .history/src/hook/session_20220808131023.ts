export const setSession = (key:string, data:string | number) => {
    sessionStorage.setItem(key, String(data));
};

export const getSession = (key:string) => {
    return sessionStorage.getItem(key);
};