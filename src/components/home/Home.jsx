import { Link } from "react-router-dom";
import DesktopNavBar from "../navbar/DesktopNavBar.jsx";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.background}>
            <DesktopNavBar />
            
            <div className={styles.content}>
            <div className={styles.container}>
                <h3>So, you want to travel to</h3>
                <h1>Space</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
                Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>

            <Link to="/destination">
                <button className={styles.button}>Explore</button>
            </Link>
            </div>
        </div>
    )
};