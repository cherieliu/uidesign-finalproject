import React, { Fragment, useState } from "react";
import './CSS/Index.css';
import map from './Images/neutral zone map.png';
import nightmap from './Images/neutral zone night.png';
import Iframe from 'react-iframe';
import NavigationMenu from "./Menu";

function HomePage() {

    const [day, setDay] = useState(true);
    const switchNight = () => {
        setDay(false);
    };

    const switchDay = () => {
        setDay(true);
    }

    return (
        <div className="smartphone">
            <div className="menu">
            <div className="header">
                <Fragment><strong>NEUTRAL ZONE</strong></Fragment>
                <Fragment><span>Precise Location ON</span></Fragment>
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
                {day === true ? <Iframe src={map} className="map" /> : <Iframe src={nightmap} className="map" />}
            </div>
            </div>
        </div>
    )
}

export default HomePage;