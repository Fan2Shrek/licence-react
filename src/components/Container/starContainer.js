import { useState } from "react";

import Star from "../Icon/star";
import filmApi from "../../lib/filmApi";
import styles from "./starContainer.module.scss";

const StarContainer = ({ filmId }) => {
    const [hover, setHover] = useState(0);

    const handleClick = (index) => {
        filmApi.rateFilm(filmId, ++index * 2)
    }

    const handleDelete = () => {
        filmApi.deleteRate(filmId);
    }

    return <>
     {[...Array(5)].map((_, index) =>
         <Star key={index} enable={index <= hover} onMouseEnter={() => setHover(index)} onClick={() => handleClick(index)} />
     )}
     <p onClick={handleDelete} className={styles.delete}>Supprimer mon avis</p>
    </>
}

export default StarContainer;
