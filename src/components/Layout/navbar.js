import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import styles from './navbar.module.scss';
import path from '../../path';

const Navbar = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`${path.search}?search=${search}`);
        // @todo find a better way to refresh the page
        // Due to the fact that the search page is a child of the home page, the page is not refreshed when the search is done
        window.location.reload();
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
            </ul>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input value={search} onChange={(e) => setSearch(e.target.value)}/>
            </form>
        </div>
    </nav>
}

export default Navbar;
