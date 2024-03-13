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

    post(url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    delete(url) {
        return fetch(url, {
            method: 'DELETE',
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


export default getApi();
