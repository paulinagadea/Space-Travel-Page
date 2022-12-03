import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function DesktopNavBar() {
    return (
        <div className={styles.navBar}>
            <img src="/assets/shared/logo.svg" alt="logo" className={styles.logo}/>
            <span className={styles.line}></span>
        <nav className={styles.nav}>
            <ul className={styles.content}>
                <Link to="/">
                    <li><span>00</span> Home</li>
                </Link>
                <Link to="/destination">
                    <li><span>01</span> Destination</li>
                </Link>
                <Link to="/crew">
                    <li><span>02</span> Crew</li>
                </Link>
                <Link to="/technology">
                    <li><span>03</span> Technology</li>
                </Link>
            </ul>
        </nav>
        </div>
    )
};