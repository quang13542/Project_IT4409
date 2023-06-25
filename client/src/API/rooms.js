import { api } from "./api";
const url = '/rooms';
export const getRoomById = async (room_id) => {
    
    return await api.get(url, {room_id});
};

export const getAllRooms = async (params) => {
    return await api.get(url, { params });
}
