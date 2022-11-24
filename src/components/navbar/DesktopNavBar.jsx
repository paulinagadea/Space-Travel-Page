import React from 'react';
import { Link } from 'react-router-dom';

export default function DesktopNavBar() {
    return (
        <div>
            <ul>
                <Link to='/'>
                    <li><span>00</span> Home</li>
                </Link>
                <Link to='/destination'>
                    <li><span>01</span> Destination</li>
                </Link>
                <Link to='/crew'>
                    <li><span>02</span> Crew</li>
                </Link>
                <Link to='/technology'>
                    <li><span>03</span> Technology</li>
                </Link>
            </ul>
        </div>
    )
};