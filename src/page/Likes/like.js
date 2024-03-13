import { useContext } from 'react';

import styles from './like.module.scss';
import LikeContext from '../../Context/LikeContext';
import FilmContainer from '../../components/Container/filmContainer';

const Like = () => {
    const { likes } = useContext(LikeContext);

    return <div className={styles.content}>
        <h1>Like</h1>
        <FilmContainer films={likes} detailed/>
    </div>
}

export default Like;
