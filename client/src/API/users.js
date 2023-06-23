import { setAccessToken } from "../Configs/localStorage";
import { api } from "./api";

export const createUser = async (body) => {
    const response = await api.post("/signup", body);

    setAccessToken(response?.token);

    return response;
}

export const login = async (body) =>{
    const response = await api.post("/signin", body);
    return response;
}