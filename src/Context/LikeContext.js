import { createContext, useEffect, useState } from 'react';

import likeApi from '../lib/likeApi';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [likes, setLikes] = useState([]);
    const [likeIds, setLikeIds] = useState([]);

    const addLike = (film) => {
        likeApi.addLike(film.id);
        setLikes([...likes, film]);
    }

    const removeLike = (film) => {
        likeApi.removeLike(film.id);
        setLikes(likes.filter(({id}) => id !== film.id));
    }

    useEffect(() => {
        likeApi.getLikes()
        .then(res => res.json())
        .then(data => setLikes(data.results))
    }, [])

    useEffect(() => {
        setLikeIds(likes.map(movie => movie.id))
    }, [likes])

    return (
        <LikeContext.Provider value={{ likes, likeIds, addLike, removeLike }}>
            {children}
        </LikeContext.Provider>
    )
}

export default LikeContext;
