import{ useSearchParams} from 'react-router-dom';
import { useContext, useEffect } from 'react';

import styles from './search.module.scss';
import FilmContainer from '../../components/Container/filmContainer';
import SearchContext from '../../Context/searchContext';
import ResultContainer from '../../components/Container/resultContainer';

const Search = () => {
    const [queryParameters] = useSearchParams();
    const { results, query, setQuery, setFilmOnly, filmOnly } = useContext(SearchContext);

    useEffect(() => {
        setQuery({
            query: queryParameters.get('query')
        });
    }, [queryParameters, setQuery]);

    return <div className={styles.results}>
        <h1>Nos résultats pour : {query.query}</h1>
        <div className={styles['film-only']}>
            <input type="checkbox" id="filmOnly" name="filmOnly" value={query.filmOnly} onChange={() => setFilmOnly(filmOnly => !filmOnly )} />
            <label>Voir seulement les films</label>
        </div>
        {results.length <= 0 && <h1>Nous n'avons pas trouvé de résultats pour vos critères de recherche</h1> }
        {filmOnly ? <FilmContainer films={results} detailed/> : <ResultContainer result={results} />}
    </div>
}

export default Search;
