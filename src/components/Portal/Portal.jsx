import React from 'react'
import { useSelector } from "react-redux";
import { selctSendMessegeIsOpen } from "../../app/future/mailSlice";
import { Outlet } from 'react-router-dom';
import Headers from "../Headers/Headers";
import Sidebar from "../Sidebar/Sidebar";
import Compose from "../Compose/Compose";
import './Portal.css'

function Portal() {
    const isMessegeOpen = useSelector(selctSendMessegeIsOpen);
    console.log(isMessegeOpen)
    return (
        <div className="App">
            <Headers />
            <div className="app_body">
                <Sidebar />
                <Outlet />
            </div>
            {
                isMessegeOpen && <Compose />
            }
        </div>
    )
}

export default Portal
