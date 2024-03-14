import styles from './filmContainer.module.scss';
import FilmCard from "../Card/poster/filmCard";

const FilmContainer = ({films, detailed = false}) => {
    return <div className={styles.container}>
        {films.map(film =>
            <FilmCard key={film.id} film={film} detailed={detailed}/>
        )}
    </div>
}

export default FilmContainer;
