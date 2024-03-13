import { useEffect, useState } from "react";

import FilmCard from "../components/Card/filmCard";
import style from "./home.module.scss";
import filmApi from "../lib/filmApi";

const Home = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        filmApi.getTrendingFilms()
        .then(res => res.json())
        .then(data => setFilms(data.results))
    }, []);

    return <div className={style.home}>
        <h1>Nos recommandations</h1>
        <div className={style['film--container']}>
            {films.map((film) =>
                <FilmCard film={film} key={film.id}/>
            )}
        </div>
    </div>
}

export default Home;
