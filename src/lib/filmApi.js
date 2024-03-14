import api from "./api";
import { flatQuery } from "../helper/querryHelper";

class FilmApi {
    constructor(baseUrl, api) {
        this.baseUrl = baseUrl;
        this.api = api;
    }

    search(query) {
        const convertedQuery = flatQuery(query);

        return this.api.get(`${this.baseUrl}/search/movie?${convertedQuery}&language=fr-FR`);
    }

    searchAll(query) {
        const convertedQuery = flatQuery(query);

        return this.api.get(`${this.baseUrl}/search/multi?${convertedQuery}&language=fr-FR`);
    }

    advancedSearch(query) {
        const convertedQuery = flatQuery(query);

        return this.api.get(`${this.baseUrl}/discover/movie?=${convertedQuery}&language=fr-FR`);
    }

    getTrendingFilms() {
        return this.api.get(`${this.baseUrl}/trending/movie/day?language=fr-FR`);
    }

    getCategories() {
        return this.api.get(`${this.baseUrl}/genre/movie/list?language=fr-FR`);
    }

    getFilm(id) {
        return this.api.get(`${this.baseUrl}/movie/${id}?language=fr-FR`);
    }

    rateFilm(id, rate) {
        return this.api.post(`${this.baseUrl}/movie/${id}/rating`, { value: rate });
    }

    deleteRate(id) {
        return this.api.delete(`${this.baseUrl}/movie/${id}/rating`);
    }
}

let filmApi = null;

const getFilmApi = () => {
    if (!filmApi) {
        filmApi = new FilmApi(process.env.REACT_APP_API_URL, api);
    }

    return filmApi;
}

export default getFilmApi();
