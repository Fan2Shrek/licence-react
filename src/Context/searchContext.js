import { createContext, useEffect, useState } from 'react';

import filmApi from '../lib/filmApi';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [query, setQuery] = useState({});
    const [results, setResults] = useState([]);
    const [filmOnly, setFilmOnly] = useState(false);

    useEffect(() => {
        if (filmOnly) {
            filmApi.search(query)
            .then((res) => res.json())
            .then(data => setResults(data.results))
        } else {
            filmApi.searchAll(query)
            .then((res) => res.json())
            .then(data => setResults(data.results))
        }
    }, [query, filmOnly ])

    return (
        <SearchContext.Provider value={{ query, setQuery, results, filmOnly, setFilmOnly }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;
