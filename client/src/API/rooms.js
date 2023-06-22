import { api } from "./api";
const url = '/products';
export const getRoomById = async (id) => {
    
    return await api.get(`${url}/${id}`);
};

export const getAllRoom = async (params) => {
    return await api.get(url, { params });
}