import axios from 'axios';
import { getAccessToken, setAccessToken } from '../Configs/localStorage';

export const api = axios.create({
    baseURL:"https://dummyjson.com/",
    headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
    },
});

//Interceptors
api.interceptors.request.use(
    (config) => {
        const token = getAccessToken();

        // add token to headers
        if (token && config?.headers) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
)
api.interceptors.response.use(
    (response) => {
        if (response.data.token) {
            setAccessToken(response.data.token);
        }
        return response.data
    },
    (error) => {
        return Promise.reject(error);
    },
);