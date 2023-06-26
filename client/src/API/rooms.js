import { api } from "./api";
export const getRoomById = async (room_id) => {
    return await api.get(`/room/${room_id}`);
};

export const getAllRooms = async (params) => {
    return await api.get('/rooms', { params });
}
