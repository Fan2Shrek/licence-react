import { Link } from 'react-router-dom';
import { getPath } from '../../../helper/imgHelper';
import styles from './filmCard.module.scss';

const filmCard = ({ film, detailed }) => {
    return <Link to={`/film/${film.id}`}>
        <div className={styles.card}>
            <p>{film.title}</p>
            <img src={getPath(film.poster_path)} alt={film.title}/>
            {detailed && <div>
                <p>{new Date(film.release_date).getFullYear()}</p>
            </div>
            }
        </div>
    </Link>
}

export default filmCard;
