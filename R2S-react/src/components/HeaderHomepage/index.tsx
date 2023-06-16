import "./header.css";
import React from "react";
import logo from "../../assets/img/logo-symbol.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from "../../store/actions/actionTypes";
export const HeaderHomepage = () => {
    const dispath = useDispatch()
    const handleLogout = () => {
        dispath({ type: Actions.PROCESS_LOGOUT })
    }
    return (
        <>
            <header className="navbar-light  header-static bg-mode">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to="/home" style={{ textDecoration: "none" }}>
                            <a className="navbar-brand">
                                <img className="logo-img" src={logo} alt=" " />
                                <a >ShareSpace</a>
                            </a>
                        </Link>
                        <div className="nav-item w-100">
                            <form className="rounded position-relative">
                                <input className="form-control ps-5 bg-light" type="search" placeholder="Search..." aria-label="Search" />
                                <button className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>
                            </form>
                        </div>
                        <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
                            <li className="nav-item ms-2">
                                <a className="nav-link icon-md btn btn-light p-0" href="messaging.html">
                                    <i className="bi bi-chat-left-text-fill fs-6"> </i>
                                </a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link icon-md btn btn-light p-0" href="">
                                    <i className="bi bi-gear-fill fs-6"> </i>
                                </a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link icon-md btn btn-light p-0" href="">
                                    <i className="bi bi-bell-fill fs-6"> </i>
                                </a>
                            </li>
                            <li className="nav-item ms-2">
                                <div className="dropdown">
                                    <a href="#" className="text-secondary btn btn-light py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-list fs-6"> </i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-person-circle" style={{ paddingRight: "6px" }}></i> My profile </a></li>
                                        <Link to="/changepassword" style={{ textDecoration: "none" }}>
                                            <li>
                                                <a className="dropdown-item menu-link">
                                                    <i className="bi bi-gear-fill" style={{ paddingRight: "6px" }}></i> Change password
                                                </a>
                                            </li>
                                        </Link>
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i> Block</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <Link to="/" style={{ textDecoration: "none" }}>
                                            <li><a className="dropdown-item"
                                                onClick={handleLogout}> <i className="bi bi-box-arrow-right" style={{ paddingRight: "6px" }}></i> Log out</a></li>
                                        </Link>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}


