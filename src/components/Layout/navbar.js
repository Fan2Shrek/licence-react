import styles from './navbar.module.scss';

const Navbar = () => {
    return <nav className={styles.navbar}>
        <ul className={styles.nav}>
            <li className={styles.navItem}>
                <a href="/">Home</a>
            </li>
            <li className={styles.navItem}>
                <a href="/about">About</a>
            </li>
            <li className={styles.navItem}>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
}

export default Navbar;
