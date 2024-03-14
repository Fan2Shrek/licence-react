import { createContext, useEffect, useState } from 'react';

import filmApi from '../lib/filmApi';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [query, setQuery] = useState({});
    const [results, setResults] = useState([]);

    useEffect(() => {
        filmApi.search(query)
        .then((res) => res.json())
        .then(data => setResults(data.results))
    }, [query])

    return (
        <SearchContext.Provider value={{ query, setQuery, results }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;
