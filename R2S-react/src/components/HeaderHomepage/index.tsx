import "./header.css";
import React from "react";
import logo from "../../assets/img/logo-symbol.png";
import'bootstrap-icons/font/bootstrap-icons.css';


export const HeaderHomepage = () => {
    return (
        <>
            <header className="navbar-light  header-static bg-mode">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="http://localhost:3000/home">
                            <img className="logo-img" src={logo} alt=" "/>
                            <a>ShareSpace</a>
                        </a>                  
                        <div className="nav-item w-100">
                            <form className="rounded position-relative">
                                <input className="form-control ps-5 bg-light" type="search" placeholder="Search..." aria-label="Search"/>
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
                                <a className="nav-link icon-md btn btn-light p-0" href="">
                                    <i className="bi bi-list fs-6"> </i>
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
 }

    