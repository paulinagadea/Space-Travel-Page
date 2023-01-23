import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function DesktopNavBar() {
    return (
        <div className={styles.navBar}>
            <img src="/assets/shared/logo.svg" alt="logo" className={styles.logo}/>
            <span className={styles.line}></span>
        <nav className={styles.nav}>
            <ul className={styles.content}>
                <li>
                    <Link to="/" activeClassName='active' inactiveClassName='inactive'>
                        <span>00</span> Home
                    </Link>
                </li>
                <li>
                    <Link to="/destination" activeClassName='active' inactiveClassName='inactive'>
                        <span>01</span> Destination
                    </Link>
                </li>
                <li>
                    <Link to="/crew" activeClassName='active' inactiveClassName='inactive'>
                        <span>02</span> Crew
                    </Link>
                </li>
                <li>
                    <Link to="/technology" activeClassName='active' inactiveClassName='inactive'>
                        <span>03</span> Technology
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
    )
};