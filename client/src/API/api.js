import axios from 'axios';

export const api = axios.create({
    baseURL: "https://reqres.in/api/",
    headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
    },
});


// api.interceptors.request.use(
//     (config) => {
//         const token = getAccessToken();

//         // add token to headers
//         if (token && config?.headers) {
//             config.headers["Authorization"] = "Bearer " + token;
//         }
//         return config;
//     },
//     (error) => {
//         Promise.reject(error);
//     },
// )
api.interceptors.response.use(
	(response) => response.data,
	(error) => {
		return Promise.reject(error);
	},
);