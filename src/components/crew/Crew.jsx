import { useState } from "react";
import CrewData from "./CrewData.jsx";
import styles from "./Crew.module.css";
import DesktopNavBar from "../navbar/DesktopNavBar.jsx";

export default function Crew() {
    const [currentContent, setCurrentContent] = useState(1);
    const { data } = CrewData(currentContent);

    return (
        <div className={styles.back}>
            <DesktopNavBar />

            <div className={styles.mainContainer}>

                <div className={styles.crewContainer}>
                    <h4><span>02</span> Meet your crew</h4>
                    <h3>{data.role}</h3>
                    <h1>{data.name}</h1>
                    <p>{data.bio}</p>

                    <nav>
                        <ul>
                            <li>
                                <button onClick={() => setCurrentContent(1)}
                                className={
                                    currentContent === 1
                                        ? styles.active
                                        : ''
                                }></button>
                            </li>
                            <li>
                                <button onClick={() => setCurrentContent(2)}
                                className={
                                    currentContent === 2
                                        ? styles.active
                                        : ''
                                }></button>
                            </li>
                            <li>
                                <button onClick={() => setCurrentContent(3)}
                                className={
                                    currentContent === 3
                                        ? styles.active
                                        : ''
                                }></button>
                            </li>
                            <li>
                                <button onClick={() => setCurrentContent(4)}
                                className={
                                    currentContent === 4
                                        ? styles.active
                                        : ''
                                }></button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.imgBox}>
                    <img src={data.image} alt={data.name} />
                </div>
            </div>
        </div>
    )
};