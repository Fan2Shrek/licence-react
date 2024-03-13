import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Mousewheel} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

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
            <Swiper
                spaceBetween={50}
                slidesPerView={6}
                modules={[Navigation, Mousewheel]}
                navigation={true}
            >
                {films.map((film) =>
                    <SwiperSlide>
                        <FilmCard film={film} key={film.id}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    </div>
}

export default Home;
