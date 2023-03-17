import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function DesktopNavBar() {
    return (
        <div className={styles.navBar}>
            <img src="/assets/shared/logo.svg" alt="logo" className={styles.logo}/>
            <span className={styles.line}></span>
        <nav className={styles.nav}>
            <ul className={styles.content}>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? styles.active : ""
                    }>
                        <span>00</span> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/destination" 
                        className={({ isActive }) => isActive ? styles.active : ""
                    }>
                        <span>01</span> Destination
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/crew" 
                        className={({ isActive }) => isActive ? styles.active : ""
                    }>
                        <span>02</span> Crew
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/technology"
                        className={({ isActive }) => isActive ? styles.active : ""
                    }>
                        <span>03</span> Technology
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
    )
};