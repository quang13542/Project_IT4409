import { api } from "./api";

export const createUser = async (body) => {
    const response = await api.post("/register", body);

    // setAccessToken(response?.token);

    return response;
}

export const login = async (body) =>{
    const response = await api.post("/login", body);
    return response;
}