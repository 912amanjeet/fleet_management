import React from 'react';
import { Link } from 'react-router-dom';
import "../navbar/navbar.css"
export default function Navbar(props) {
    // const dispatch = useDispatch();
    console.log("propsrouting",props)
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow" >
                <div className="container-fluid ">
                 
                    <Link className="navbar-brand text-primary fw-bold mx-4" to="/">Fleet Management</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ulItemList">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicleDetails">Vehicle</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reports
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/overSpeedingReportGenerate">Generate Overspeeding Reports</Link></li>
                                    <li><Link className="dropdown-item" to="/overSpeedingReport">Overspeeding Reports</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Driver</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fuelAndMaintenanceRequest">Fuel & Maintenance Requests</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fundAllocationDetails">Funds Allocation details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Manage Devices</Link>
                            </li>
                            <li className="nav-item dropdown moreContainer">
                                <div className="mx-2">More</div>
                                <Link className="nav-link dropdown-toggle mx-2" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"></Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/manageSubAdminScreen">Manage SubAdmin</Link></li>
                                    <li><Link className="dropdown-item" to="/subAdminScreen">Sub Admin</Link></li>
                                    <li><Link className="dropdown-item" to="/helpAndQuery">Help & Query</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/activitylogSubAdmin">ActivityLog</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/documents">Documents</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item notificationIcon">
                                <img className="nav-link notificationIconStyle" src={require("../../assets/images/notification.png")} alt="" />
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={require("../../assets/images/profilecircle.png")} alt="" className='profilePictureIcon' />
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/userProfile">Profile</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link  className="dropdown-item" to="/">Log out</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <img className="nav-link globalIconStyle" src ={require('../../assets/images/global.png')} alt="" />
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ENG
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
