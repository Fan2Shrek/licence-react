import { Outlet } from "react-router-dom";

import styles from './main.module.scss';
import Navbar from "../components/Layout/navbar";
import Footer from "../components/Layout/footer";
import { LikeProvider } from "../Context/LikeContext";

const Layout = () => {
    return <div className={styles.content}>
        <Navbar />
        <main>
            <LikeProvider>
                <Outlet />
            </LikeProvider>
        </main>
        <Footer />
    </div>
}

export default Layout;
