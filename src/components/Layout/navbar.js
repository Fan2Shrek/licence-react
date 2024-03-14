import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import styles from './navbar.module.scss';
import path from '../../path';
import SearchContext from '../../Context/searchContext';

const Navbar = () => {
    let navigate = useNavigate();
    const { setQuery, query } = useContext(SearchContext);
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery((query) => ({...query, query: search}));

        navigate(`${path.search}?query=${search}`);
    }

    return <nav className={styles.navbar}>
        <div>
            <ul className={styles.nav}>
                <li className={styles.navItem}>
                    <a href={path.home}>Accueil</a>
                </li>
                <li className={styles.navItem}>
                    <a href={path.category}>Categorie</a>
                </li>
                <li className={styles.navItem}>
                    <a href={path.likes}>Favories</a>
                </li>
            </ul>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input value={search || query.query || ''} onChange={(e) => setSearch(e.target.value)}/>
            </form>
        </div>
    </nav>
}

export default Navbar;
