import { api } from "./api";

export const placeOrder = async (body) =>{
    return await api.post('/register_room', body);
}