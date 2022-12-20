import React, { Fragment } from "react";
import './CSS/AlertsPage.css';
import NavigationMenu from "./Menu";

export default function AlertsPage() {
    return (
        <div className="smartphone">
            <div className="menu">
                <div className="header">
                    <Fragment>
                        <br></br>
                        <strong>ALERTS</strong>
                    </Fragment>
                    <div className="switch">
                        <NavigationMenu />
                    </div>
                </div>
                <div className="new">
                    <div className="newtext">
                    <Fragment>
                        <br></br>
                        <strong> NEW </strong>
                    </Fragment>
                    </div>
                </div>
                <div className="viewed">
                    <div className="newtext">
                    <Fragment>
                        <br></br>
                        <strong> VIEWED </strong>
                    </Fragment>
                    </div>
                </div>
                <div className="samplenew">
                    <div className="alerttext">
                    <Fragment>
                        <br></br>
                        Your child was in an unsafe zone today at 12:00 PM.
                    </Fragment>
                    </div>
                </div>
                <div className="sampleviewed">
                    <Fragment>
                        <br></br>
                        Your precise location request was accepted.
                    </Fragment>
                </div>
                <div className="alerticon">
                    <img src="https://www.freeiconspng.com/thumbs/alert-icon/alert-icon-red-11.png" 
                        width={40}
                        height={37}/>
                </div>
                <div className="clickicon1">
                    <img src="https://flyclipart.com/thumb2/arrow-caret-next-right-triangle-icon-241817.png"
                        width={40}
                        height={20}
                    />
                </div>
                <div className="clickicon2">
                    <img src="https://flyclipart.com/thumb2/arrow-caret-next-right-triangle-icon-241817.png"
                        width={40}
                        height={20}
                    />
                </div>
            </div>
        </div>
    )
}