import { api } from "./api";

const roomApi = {
    getAll(params) {
        const url ='/photos';
        return api.get(url, {params});
    },

    get(id) {
        const url =`/photos/${id}`;
        return api.get(url);
    },

    add(data) {
        const url = '/photos';
        return api.post(url, data);
    },

    update(data) {
        const url =`/photos/${data.id}`;
        return api.patch(url, data);
    },

    remove(id) {
        const url = `/photos/${id}`;
        return api.delete(url);
    }
}
export default roomApi