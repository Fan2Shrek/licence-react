import { Outlet } from "react-router-dom";

import styles from './main.module.scss';
import Navbar from "../components/Layout/navbar";
import Footer from "../components/Layout/footer";
import { LikeProvider } from "../Context/LikeContext";
import { SearchProvider } from "../Context/searchContext";

const Layout = () => {
    return <div className={styles.content}>
        <SearchProvider>
            <Navbar />
            <main>
                <LikeProvider>
                        <Outlet />
                </LikeProvider>
            </main>
        </SearchProvider>
        <Footer />
    </div>
}

export default Layout;
