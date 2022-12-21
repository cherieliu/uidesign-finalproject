import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { Fragment } from "react";
import unsafemap from './Images/alert unsafe.jpeg';
import './CSS/AlertsPage.css';
import NavigationMenu from "./Menu";
import { useNavigate } from "react-router-dom";
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function AlertsPage() {
    const navigate = useNavigate();
    const navToHome = () => {
        navigate('/home/2');
    };

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
                    <div className="alerticon">
                        <img src="https://www.freeiconspng.com/thumbs/alert-icon/alert-icon-red-11.png"
                            width={40}
                            height={37} />
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
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMore />} id="alert">
                                Your child was in an unsafe zone today at 12:00 PM.
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="alerttext">
                                Your child entered an unsafe zone today at 12:00 PM. Their location was viewable on the map.
                                <br></br>
                                <div className="viewviolationbutton" onClick={navToHome}>
                                    View Violation Summary
                                </div>
                                <br></br>
                                <div className="expandedimage">
                                <img src={unsafemap} width={100} height={100} />
                                </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                </div>
                <div className="sampleviewed">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />} id="alert1">
                            Your precise location request was accepted.
                        </AccordionSummary>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />} id="alert2">
                            Your precise location request was denied.
                        </AccordionSummary>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}