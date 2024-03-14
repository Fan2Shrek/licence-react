import { getPath } from '../../../helper/imgHelper';
import styles from './filmCard.module.scss';
import FilmCard from './filmCard';

const ResultCard = ({ result, detailed }) => {
    if (result.media_type === 'movie') {
        return <FilmCard film={result} detailed={detailed}/>
    }

    return <div className={styles.card}>
            <p>{result.title || result.name}</p>
            <img src={getPath(result.poster_path)} alt={result.title}/>
            {detailed && <div>
                <p>{result.media_type}</p>
            </div>
            }
        </div>
}

export default ResultCard;
