import{ useSearchParams} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import styles from './search.module.scss';
import filmApi from '../../lib/filmApi';
import FilmContainer from '../../components/Container/filmContainer';
import SearchContext from '../../Context/searchContext';

const Search = () => {
    const [queryParameters] = useSearchParams();
    const { results, query, setQuery } = useContext(SearchContext);

    useEffect(() => {
        setQuery({
            query: queryParameters.get('query')
        });
    }, [queryParameters]);

    return <div className={styles.results}>
        <h1>Nos résultats pour : {query.query}</h1>
        {results.length <= 0 && <h1>Nous n'avons pas trouvé de résultats pour vos critères de recherche</h1> }
        <FilmContainer films={results} detailed/>
    </div>
}

export default Search;
