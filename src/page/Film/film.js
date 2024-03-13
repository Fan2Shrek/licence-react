import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './film.module.scss';
import filmApi from '../../lib/filmApi';
import { getPath } from '../../helper/imgHelper';
import CategoryCard from '../../components/Card/category/categoryCard';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Film = () => {
    let { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        filmApi.getFilm(id)
        .then(response => response.json())
        .then(data => setFilm(data));
    }, [id]);

    if (!film) {
        return <p>Chargement</p>
    }

    const formatedDate = new Date(film.release_date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

    return <div className={styles.content}>
        <h1>{film.title}</h1>
        {film.tagline && <h5>{film.tagline}</h5>}
        <div className={styles.categories}>
            {film.genres.map(genre => <CategoryCard key={genre.id} category={genre} unselectable />)}
        </div>
        <div className={styles.main}>
            <div className={styles.presentation}>
                <img src={getPath(film.poster_path)} alt={film.title}/>
            </div>

            <div className={styles.details}>
                <div className={styles.about}>
                    <p>{film.runtime} minutes</p>
                    <div className={styles.divider}> | </div>
                    <p>{formatedDate}</p>
                </div>
                <div>
                    <h2>Synopsis</h2>
                    <p className={styles.synopsis}>{film.overview}</p>
                </div>
                <div>
                    <h2>Production</h2>
                    <p className={styles.production}>Production : {film.production_companies.map(company => company.name).join(', ')}</p>
                </div>
                <div className={styles.notes}>
                    <h2>Notes</h2>
                    <div className={styles.rating}>
                        <CircularProgressbar value={film.vote_average * 10} text={`${film.vote_average}%`} />
                        <p>Sur : {film.vote_count} avis</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Film;
