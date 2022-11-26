import { Link } from "react-router-dom";

export default function DesktopNavBar() {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>00 Home</li>
                </Link>
                <Link to="/destination">
                    <li>01 Destination</li>
                </Link>
                <Link to="/crew">
                    <li>02 Crew</li>
                </Link>
                <Link to="/technology">
                    <li>03 Technology</li>
                </Link>
            </ul>
        </nav>
    )
};