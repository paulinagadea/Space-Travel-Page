import { useState } from "react";
import DesktopNavBar from "../navbar/DesktopNavBar.jsx";
import TechnologyData from "./TechnologyData.jsx";
import styles from "./Technology.module.css";

export default function Technology() {
    const [currentContent, setCurrentContent] = useState(1);
    const { data } = TechnologyData(currentContent);

    return (
        <div className={styles.backg}>
            <DesktopNavBar />


            <div className={styles.mainbox}>

            <div className={styles.databox}>
            <h4><span>03</span> Space Launch 101</h4>
            <div className={styles.data}>
                <nav>
                    <ul>
                    <li>
                        <button onClick={() => setCurrentContent(1)}
                        className={
                            currentContent === 1
                                ? styles.active
                                : ''
                        }>1</button>
                    </li>
                    <li>
                        <button onClick={() => setCurrentContent(2)}
                        className={
                            currentContent === 2
                                ? styles.active
                                : ''
                        }>2</button>
                    </li>
                    <li>
                        <button onClick={() => setCurrentContent(3)}
                        className={
                            currentContent === 3
                                ? styles.active
                                : ''
                        }>3</button>
                    </li>
                    </ul>
                </nav>

                <div className={styles.info}>
                    <h3>The terminology...</h3>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                </div>
                </div>
            </div>

            <img src={data.image} alt={data.name} />
            </div>
        </div>
    )
};