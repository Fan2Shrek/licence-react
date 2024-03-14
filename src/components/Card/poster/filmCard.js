import { Link } from 'react-router-dom';
import { useContext, useMemo } from 'react';

import LikeContext from '../../../Context/LikeContext';
import { getPath } from '../../../helper/imgHelper';
import styles from './filmCard.module.scss';
import Like from '../../Icon/like';

const FilmCard = ({ film, detailed }) => {
    const { likeIds, addLike, removeLike } = useContext(LikeContext);
    const isLike = useMemo(() => likeIds.includes(film.id), [likeIds, film]);

    const handleLike = (e) => {
        e.preventDefault();
        isLike ? removeLike(film) : addLike(film);
    }

    return <Link to={`/film/${film.id}`}>
        <div className={styles.card}>
            <div className={styles.like} onClick={handleLike}><Like enable={isLike}/></div>
            <p>{film.title}</p>
            <img src={getPath(film.poster_path)} alt={film.title}/>
            {detailed && <div>
                <p>{new Date(film.release_date).getFullYear()|| ''}</p>
            </div>
            }
        </div>
    </Link>
}

export default FilmCard;
