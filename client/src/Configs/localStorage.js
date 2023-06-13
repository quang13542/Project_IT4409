export const getAccessToken = () => {
    return localStorage.getItem('access_token') || null;
}

export const setAccessToken = (token) => {
    localStorage.setItem('access_token', token);
}