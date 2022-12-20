import React from "react";
import './CSS/Index.css';
import './CSS/LoginPage.css';
import logo from './Images/location.png';
import { Button, TextField } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

function LoginPage() {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/home');
    }

    return (
        <div className="smartphone">
            <div className="loginheader">
                <div className="logintext">
                    ChildLocator
                </div>
                <img src={logo} />
            </div>
            <div className="greeting">
                Welcome Back! Please enter your information below
            </div>
            <div className="inputs">
                <TextField className="textfield" id="username" label="Username" variant="outlined" size="small"/>
                <TextField className="textfield" id="username" label="Password" variant="outlined" size="small"/>
                <Button onClick={routeChange} className="button" variant="contained"> Sign In </Button>
            </div>
        </div>
    )
}

export default LoginPage;