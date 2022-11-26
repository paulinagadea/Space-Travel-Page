import { useEffect, useState } from "react";

export default function TechnologyData(vehicle) {
    const [data, setData] = useState({
        name: "Launch vehicle",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image: "/assets/technology/image-launch-vehicle-portrait.jpg",
    });

    useEffect(() => {
        switch(vehicle) {
            case 1:
                setData({
                    name: "Launch vehicle",
                    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                    image: "/assets/technology/image-launch-vehicle-portrait.jpg",
                });
                break;
            case 2:
                setData({
                    name: "Spaceport",
                    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
                    image: "/assets/technology/image-spaceport-portrait.jpg",
                });
                break;
            case 3:
                setData({
                    name: "Space capsule",
                    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
                    image: "/assets/technology/image-space-capsule-portrait.jpg",
                });
                break;
            default:
                return;
        };
    }, [vehicle]);
    return {data};
};