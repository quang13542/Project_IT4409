import { api } from "./api";
export const getRoomById = async (room_id) => {
    return await api.get(`/room/${room_id}`);
};

export const getAllRooms = async (params) => {
    return await api.get('/rooms', { params });
}
export const filterRooms = async (params) => {
    return await api.get(`/find_hotel`,{params});

}

export const mostCity = async () => {
    return await api.get('/find_most_room_city');
}

export const getAllComments = async (params) => {
    return await api.get(`/get_room_comment?room_id=${params}`);
}

export const createComment = async (body) => {
    return await api.post('/rate_service', body);
}