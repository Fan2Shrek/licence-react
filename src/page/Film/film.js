import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './film.module.scss';
import filmApi from '../../lib/filmApi';
import { getPath } from '../../helper/imgHelper';

const Film = () => {
    let { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        filmApi.getFilm(id)
        .then(response => response.json())
        .then(data => setFilm(data));
    }, []);

    if (!film) {
        return <p>Chargement</p>
    }

    console.log(film)

    return <div className={styles.content}>
        <h1>{film.title}</h1>
        <div className={styles.main}>
            <div className={styles.presentation}>
                <img src={getPath(film.poster_path)}/>
            </div>

            <div className={styles.details}>
                <p>{film.overview}</p>
                <p>{film.release_date}</p>
                <p>{film.runtime} minutes</p>
            </div>
        </div>
    </div>;
}

export default Film;
