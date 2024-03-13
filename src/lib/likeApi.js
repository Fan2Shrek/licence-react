import api from "./api";

class LikeApi {
    constructor(baseUrl, accountID, api) {
        this.baseUrl = baseUrl;
        this.accountID = accountID;
        this.api = api;
    }

    getLikes() {
        return this.api.get(`${this.baseUrl}/account/${this.accountID}/favorite/movies?language=fr-FR`);
    }

    addLike(id) {
        return this.api.post(`${this.baseUrl}/account/${this.accountID}/favorite?language=fr-FR`, {
            media_type: 'movie',
            media_id: id,
            favorite: true
        });
    }

    removeLike(id) {
        return this.api.post(`${this.baseUrl}/account/${this.accountID}/favorite?language=fr-FR`, {
            media_type: 'movie',
            media_id: id,
            favorite: false
       });
    }
}

let likeApi = null;

const getLikeApi = () => {
    if (!likeApi) {
        likeApi = new LikeApi(process.env.REACT_APP_API_URL, process.env.REACT_APP_ACCOUNT_ID, api);
    }

    return likeApi;
}

export default getLikeApi();
