import api from "./api";

class FilmApi {
    constructor(baseUrl, api) {
        this.baseUrl = baseUrl;
        this.api = api();
    }

    async getFilms() {
        return this.api.get(`${this.baseUrl}/films`);
    }

    getTrendingFilms() {
        return this.api.get(`${this.baseUrl}/trending/movie/day?language=fr-FR`);
    }
}

export default new FilmApi(process.env.REACT_APP_API_URL, api);
