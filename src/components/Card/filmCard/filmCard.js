import { getPath } from '../../../helper/imgHelper';
import styles from './filmCard.module.scss';

const filmCard = ({ film, detailed }) => {
    return <div className={styles.card}>
        <p>{film.title}</p>
        <img src={getPath(film.poster_path)} alt={film.title}/>
        {detailed && <div>
            <p>{film.release_date}</p>
        </div>
        }
    </div>
}

export default filmCard;
