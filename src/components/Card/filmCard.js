import { getPath } from '../../helper/imgHelper';
import styles from './filmCard.module.scss';

const filmCard = ({ film }) => {
    return <div className={styles.card}>
        <p>{film.title}</p>
        <img src={getPath(film.poster_path)}/>
    </div>
}

export default filmCard;
