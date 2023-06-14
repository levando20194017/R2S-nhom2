import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import background from "../../assets/img/background.jpg"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useSelector } from "react-redux/es/exports";
import { Link } from 'react-router-dom';
import { getAllPostById } from "../../services/postService";
import { useState, ChangeEvent, useEffect } from "react";
export const HomeLeftForm = (props: any) => {
    const user = useSelector(state => (state as any).user)
    const userData = user.userInfo;

    const [listPosts, setListPosts] = useState([]);
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            const data = await getAllPostById(userData.id);
            setListPosts(data.data.posts);
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, [userData.id]);
    return (
        <div className="col-lg-3">
            <div className="d-flex align-items-center d-lg-none">
                <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                    <span className="btn btn-primary">
                        <i className="fa-solid fa-sliders-h"></i>
                    </span>
                    <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
                </button>
            </div>
            <nav className="navbar navbar-expand-lg mx-0">
                <div className="offcanvas offcanvas-start show" tabIndex={-1} id="offcanvasSideNavbar" aria-modal="true" role="dialog">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-block px-2 px-lg-0">
                        <div className="cardx">
                            <div className="card-body pt-0">
                                <div className="h-50px"></div>
                                <div className="text-center">
                                    <div className="avatar avatar-lg mt-n5 mb-3">
                                        <Link to="/profile">
                                            <img className="avatar-img rounded-circle" src={userData.img_url} alt="Admin" />
                                        </Link>
                                    </div>
                                    <h5 className="mb-0">
                                        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>{userData.fullName}</Link>
                                    </h5>
                                    <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                        <div>
                                            <h6 className="mb-0">{listPosts.length}</h6>
                                            <small>Post</small>
                                        </div>
                                        <div className="vr"></div>
                                        <div>
                                            <h6 className="mb-0">2.06k</h6>
                                            <small>Followers</small>
                                        </div>
                                        <div className="vr"></div>
                                        <div>
                                            <h6 className="mb-0">200</h6>
                                            <small>Following</small>
                                        </div>
                                    </div>
                                    <hr />
                                    <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                <i className="bi bi-house-heart-fill me-2 h-20px fa-fw"></i>
                                                <span>Feeds</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                <i className="bi bi-people me-2 h-20px fa-fw"></i>
                                                <span>Friends</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                <i className="bi bi-diagram-3 me-2 h-20px fa-fw"></i>
                                                <span>Groups</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                <i className="bi bi-clipboard-pulse me-2 h-20px fa-fw"></i>
                                                <span>Pages</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer text-center py-2">
                                    <a className="btn btn-link btn-sm" href="http://localhost:3000/profile">View profile</a>
                                </div>
                            </div>
                            <ul className="nav small mt-4 justify-content-center lh-1">
                                <li className="nav-item">
                                    <a className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Settings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Help</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Privacy & terms </a>
                                </li>
                            </ul>
                            <p className="small text-center mt-1">©2023 ShareSpace</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}