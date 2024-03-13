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
