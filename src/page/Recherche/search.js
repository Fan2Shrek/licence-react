import{ useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

import FilmCard from '../../components/Card/filmCard/filmCard';
import styles from './search.module.scss';
import filmApi from '../../lib/filmApi';
import FilmContainer from '../../components/Container/filmContainer';

const Search = () => {
    const [queryParameters] = useSearchParams();
    const [results, setResults] = useState([]);
    const [query] = useState({
        query: queryParameters.get('search')
    });

    useEffect(() => {
        filmApi.search(query)
        .then((res) => res.json())
        .then(data => setResults(data.results))
    }, [query])

    return <div className={styles.results}>
        <h1>Nos résultats pour : {query.query}</h1>
        <FilmContainer films={results} detailed/>
    </div>
}

export default Search;
