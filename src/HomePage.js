import React, { Fragment, useState } from "react";
import './CSS/Index.css';
import map from './Images/neutral zone map.png';
import safemap from './Images/safe zone map.png';
import unsafemap from './Images/unsafe zone map.png';
import nightmap from './Images/neutral zone night.png';
import Iframe from 'react-iframe';
import NavigationMenu from "./Menu";
import { Zones, ZoneNames, ZoneLocation, ZoneMap } from "./Enums.ts";
import { useParams } from "react-router-dom";

function getIFrame(zone) {
    switch(zone) {
        case Zones.SAFE:
            return <Iframe src={safemap} className="map" />;
        case Zones.NEUTRAL:
            return <Iframe src={map} className="map" />;
        case Zones.DANGER:
            return <Iframe src={unsafemap} className="map" />;
    }
}

function HomePage() {
    let { basezone } = useParams();
    const [zone, setZone] = useState(basezone === '2' ? Zones.DANGER : Zones.NEUTRAL);

    const [day, setDay] = useState(true);
    const switchNight = () => {
        setDay(false);
    };

    const switchDay = () => {
        setDay(true);
    }

    // center of screen is ~700, so anything less is left
    // anything greater is right
    const handleClick = (e) => {
        // when the menu button is clicked, doesn't change zone
        if (e.screenY <= 225) {
            return;
        }
        let next = zone;
        if (e.screenX < 700) {
            next = zone - 1;
            if (next < 0) {
                next = 0;
            }
            setZone(next);
        } else {
            next = zone + 1;
            if (next > 2) {
                next = 2;
            } 
            setZone(next);
        }
    }

    return (
        <div className="smartphone"
            onClick={handleClick}>
            <div className={zone !== Zones.DANGER ? "menu" : "unsafemenu"}>
            <div className="header">
                <Fragment><strong>{ZoneNames[zone]}</strong></Fragment>
                <Fragment><span>{ZoneLocation[zone]}</span></Fragment>
                <div className="switch">
                    <NavigationMenu />
                </div>
            </div>
            <div className="mode">
                <div className="night">
                    <img src="https://icons-for-free.com/iconfiles/png/512/evening+moon+night+icon-1320196560264036207.png"
                        width={50}
                        height={50}
                        onClick={switchNight}
                        alt="night icon" />
                </div>
                <div className="day">
                    <img src="https://static.vecteezy.com/system/resources/previews/009/266/318/non_2x/sun-icon-design-free-png.png"
                        width={45}
                        height={45}
                        onClick={switchDay}
                        alt="day icon"
                    />
                </div>
                <div className="add">
                    <img src="https://www.freeiconspng.com/thumbs/add-icon-png/add-icon--line-iconset--iconsmind-29.png"
                        width={40}
                        height={40}
                        alt="add icon"
                    />
                </div>
            </div>
            <div className="content">
                {day === true ? getIFrame(zone) : <Iframe src={nightmap} className="map" />}
            </div>
            </div>
        </div>
    )
}

export default HomePage;