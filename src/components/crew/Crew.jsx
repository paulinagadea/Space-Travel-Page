import { useState } from "react";
import CrewData from "./CrewData.jsx";
import DesktopNavBar from "../navbar/DesktopNavBar.jsx";

export default function Crew() {
    const [currentContent, setCurrentContent] = useState(1);
    const { data } = CrewData(currentContent);

    return (
        <div>
            <DesktopNavBar />

            <h4>02 Meet your crew</h4>

            <div>
                <h3>{data.role}</h3>
                <h1>{data.name}</h1>
                <p>{data.bio}</p>
            </div>

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
                    <li>
                        <button onClick={() => setCurrentContent(4)}></button>
                    </li>
                </ul>
            </nav>

            <img src={data.image} alt={data.name} />
        </div>
    )
};