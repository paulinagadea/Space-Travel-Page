import { useState } from "react";
import DesktopNavBar from "../navbar/DesktopNavBar.jsx";
import TechnologyData from "./TechnologyData.jsx";

export default function Technology() {
    const [currentContent, setCurrentContent] = useState(1);
    const { data } = TechnologyData(currentContent);

    return (
        <>
            <DesktopNavBar />

            <h4>03 Space Launch 101</h4>

            <div>
                <nav>
                    <ul>
                    <li>
                        <button onClick={() => setCurrentContent(1)}></button>
                    </li>
                    <li>
                        <button onClick={() => setCurrentContent(2)}></button>
                    </li>
                    <li>
                        <button onClick={() => setCurrentContent(3)}></button>
                    </li>
                    </ul>
                </nav>

                <div>
                    <h3>The terminology...</h3>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                </div>
            </div>

            <img src={data.image} alt={data.name} />
        </>
    )
};