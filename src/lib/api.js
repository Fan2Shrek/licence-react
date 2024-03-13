class Api {
    constructor(token) {
        this.token = token;
    }

    get(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${this.token}`
            }
        })
    }
}

let api;

const getApi = () => {
    if (!api) {
        api = new Api(process.env.REACT_APP_API_TOKEN);
    }

    return api;
}


export default getApi;
