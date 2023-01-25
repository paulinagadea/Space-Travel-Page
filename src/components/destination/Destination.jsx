import { useState } from "react";
import DestinationData from "./DestinationData.jsx";
import DesktopNavBar from "../navbar/DesktopNavBar.jsx";
import styles from "./Destination.module.css";

export default function Destination() {
    const [currentContent, setCurrentContent] = useState("moon");
    const { data } = DestinationData(currentContent);

    return (
        <div className={styles.bkg}>
            <DesktopNavBar />

        <div className={styles.box}>
            <div className={styles.dest}>
                <h4><span>01</span>   Pick your destination</h4>
                <img src={`/assets/destination/image-${currentContent}.webp`} alt={currentContent}/>
            </div>

            <div className={styles.info}>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => setCurrentContent("moon")}>Moon</button>
                    </li>
                    <li>
                        <button onClick={() => setCurrentContent("mars")}>Mars</button>
                    </li>
                    <li>
                        <button onClick={() => setCurrentContent("europa")}>Europa</button>
                    </li>
                    <li>
                        <button onClick={() => setCurrentContent("titan")}>Titan</button>
                    </li>
                </ul>
            </nav>

                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <span className={styles.line}></span>
                
                <div className={styles.data}>
                <div>
                    <h5>Avg. distance</h5>
                    <h4>{data.distance}</h4>
                </div>
                <div>
                    <h5>Est. Travel Time</h5>
                    <h4>{data.travel}</h4>
                </div>
                </div>

            </div>
        </div>
        </div>
    )
};