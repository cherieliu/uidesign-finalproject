import React, { Fragment, useState } from "react";
import './CSS/HelpOptions.css';
import NavigationMenu from './Menu';

export default function HelpOptions() {
    return (
        <div className="smartphone">
            <div className="helpmenu">
                <div className="header">
                    <Fragment><br></br><strong>HELP OPTIONS</strong></Fragment>
                    <div className="switch">
                        <NavigationMenu />
                    </div>
                </div>
                <div className="helpcontent">
                <div className="title">
                    <Fragment>
                        <br></br>
                        <strong>Emergency Contacts</strong>
                    </Fragment>
                </div>
                <div className="contacts">
                    <div className="contacttext">
                        <Fragment>
                            <br></br>
                            <strong>Sara Parker</strong>
                            <br></br>
                            <span>Child 0.3 miles from their home</span>
                            <br></br>
                            <br></br>
                            <strong>John Adams</strong>
                            <br></br>
                            <span>Child 0.5 miles from their home</span>
                            <br></br>
                            <br></br>
                            <strong>Cate DeMarco</strong>
                            <br></br>
                            <span>Child 0.75 miles from their home</span>
                        </Fragment>
                    </div>
                </div>
                <div className="callschool">
                    <Fragment>
                        <strong>Call School</strong>
                    </Fragment>
                </div>
                <div className="callpolice">
                    <Fragment>
                        <strong>Call Local Police</strong>
                    </Fragment>
                </div>
                <div className="callbutton1">
                    <img 
                    src="https://e7.pngegg.com/pngimages/432/941/png-clipart-telephone-call-dialer-android-android-text-telephone-call-thumbnail.png"
                    width={30}
                    height={30}
                    />
                </div>
                <div className="callbutton2">
                <img 
                    src="https://e7.pngegg.com/pngimages/432/941/png-clipart-telephone-call-dialer-android-android-text-telephone-call-thumbnail.png"
                    width={30}
                    height={30}
                    />
                </div>
                <div className="callbutton3">
                <img 
                    src="https://e7.pngegg.com/pngimages/432/941/png-clipart-telephone-call-dialer-android-android-text-telephone-call-thumbnail.png"
                    width={30}
                    height={30}
                    />
                </div>
            </div>
            </div>
        </div>
    )
}