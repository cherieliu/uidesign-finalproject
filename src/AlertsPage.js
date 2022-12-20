import React, { Fragment, useState } from "react";
import './CSS/AlertsPage.css';
import Iframe from 'react-iframe';
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
            </div>
        </div>
    )
}