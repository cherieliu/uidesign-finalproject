import React, { Fragment, useState } from "react";
import './CSS/UnsafeZone.css';
import NavigationMenu from './Menu';
import unsafezone from './Images/unsafe zone.png';
import safemap from './Images/safe zone map.png';

export default function UnsafeZone() {
    return (
        <div className="smartphone">
            <div className="menu">
                <div className="header">
                    <Fragment><br></br><strong>EDIT MODE</strong></Fragment>
                    <div className="switch">
                        <NavigationMenu />
                    </div>
                </div>
	    </div>
	    <div className="howto">
		<Fragment>
		    <br></br>
		    <strong>How to Map Unsafe Zones</strong>
		    <br></br>
		    <span>Safe Zones appear red on the map and you will be alerted if your child enters the area.</span>
		</Fragment>
	    </div>
	    <div className="image">
		<img src={unsafezone}/>
	    </div>
	    <div className="nexttext">
		<Fragment>
		    <br></br>Next
		</Fragment>
	    </div>
            <div className="content">
                <iframe src={safemap} className="map" />
            </div>
	</div>
    )
}
