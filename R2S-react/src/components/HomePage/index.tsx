import React from "react";
import "./home.css";
import {Container, Row, Col, Image} from 'react-bootstrap';
import background from "../../assets/img/background.jpg"
import'bootstrap-icons/font/bootstrap-icons.css';


export const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="row g4">
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
                                    <div className="card overflow-hidden">
                                        <div className="card-body pt-0">
                                            <div className="h-50px"></div>
                                            <div className="text-center">
                                                <div className="avatar avatar-lg mt-n5 mb-3">
                                                    <a href="#!">
                                                        <img className="avatar-img rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" />
                                                    </a>
                                                </div>
                                                <h5 className="mb-0">
                                                    <a href="#!"> Le Van Do </a>
                                                </h5>
                                                <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                                    <div>
                                                        <h6 className="mb-0">2</h6>
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
                                                <hr/>
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
                    <div className="col-md-8 col-lg-6 vstack gap-4">
                        <div className="d-flex gap-2 mb-n3">
                            <div className="position-relative">
                                <div className="card border border-2 border-dashed h-150px px-4 px-sm-5 shadow-none d-flex align-items-center justify-content-center text-center">
                                    <div>
                                        <a className="stretched-link btn btn-light rounded-circle icon-md" href="#!">
                                            <i className="fa-solid fa-plus"></i>
                                        </a>
                                        <h6 className="mt-2 mb-0 small">Post a Story</h6>
                                    </div>
                                </div>
                            </div>
                            <div id="stories" className="storiesWrapper stories-square stories user-icon carousel scroll-enable stories user-icon carousel snapgram ">
                            </div>
                        </div>
                        <div className="card card-body">
                            <div className="d-flex mb-3">
                                <div className="avatar avatar-xs me-2">
                                    <a href="#!">
                                        <img className="avatar-img rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" />
                                    </a>
                                </div>
                                <form className="w-100" >
                                    <textarea className="form-control pe-4 border-0" rows={2} data-autoresize placeholder="Share yours thoughts..."></textarea>
                                </form>
                            </div>
                            <div>
                                <ul className="nav nav-pills nav-stack small fw-normal">
                                    <li className="nav-item">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto" >
                                            <i className="bi bi-image-fill text-success pe-2"></i>
                                            Photo
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo">
                                            <i className="bi bi-camera-reels-fill text-info pe-2"></i>
                                            Video
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo">
                                            <i className="bi bi-camera-reels-fill text-info pe-2"></i>
                                            Video
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo">
                                            <i className="bi bi-camera-reels-fill text-info pe-2"></i>
                                            Video
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown ms-lg-auto">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header border-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-story me-2">
                                            <a href="#!"> <img className="avatar-img rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"/> </a>
                                        </div>
                                        <div>
                                            <div className="nav nav-divider">
                                                <h6 className="nav-item card-title mb-0"> <a href="#!"> Le Van Do </a></h6>
                                                <span className="nav-item small">2hr</span>
                                            </div>
                                            <p className="mb-0 small">Public</p>
                                        </div>
                                    </div>
                                    
                                    <div className="dropdown">
                                        <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots"></i>
                                        </a>
                                        
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i>Block</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>Hello</p>
                                <img className="card-img" src={background} alt=" "/>
                            </div>
                            <ul className="nav nav-stack py-3 small">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#!" data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true" data-bs-custom-class="tooltip-text-start" data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"> <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments (12)</a>
                                </li>
                                <li className="nav-item dropdown ms-sm-auto">
                                    <a className="nav-link mb-0" href="#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-reply-fill flip-horizontal ps-1"></i>
                                        Share (3)
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a></li>
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a></li>
                                    </ul>
                                </li>                     
                            </ul>
                            <div className="d-flex mb-3">
                                <div className="avatar avatar-xs me-2">
                                    <a href="#!"> <img className="avatar-img rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /> </a>
                                </div>
                                <form className="nav nav-item w-100 position-relative">
                                    <textarea data-autoresize="" className="form-control pe-5 bg-light" rows={1} placeholder="Add a comment..."></textarea>
                                    <button className="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0" type="submit">
                                        <i className="bi bi-send-fill"> </i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="col-sm-6 col-lg-12">
                            <div className="card">
                                <div className="card-header pb-0 border-0">
                                    <h5 className="card-title mb-0">Suggetion</h5>
                                </div>
                                <div className="card-body">
                                    <div className="hstack gap-2 mb-3">
                                        <div className="avatar">
                                            <a href="#!"><img className="avatar-img rounded-circle" src="" alt=""/></a>
                                        </div>
                                        <div className="overflow-hidden">
                                            <a className="h6 mb-0" href="#!">Judy Nguyen </a>
                                            <p className="mb-0 small text-truncate">News anchor</p>
                                        </div>
                                        <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i className="fa-solid fa-plus"> </i></a>
                                    </div>
                                        <div className="hstack gap-2 mb-3">
                                            <div className="avatar avatar-story">
                                                <a href="#!"> <img className="avatar-img rounded-circle" src="" alt=""/> </a>
                                            </div>
                                            <div className="overflow-hidden">
                                                <a className="h6 mb-0" href="#!">Amanda Reed </a>
                                                <p className="mb-0 small text-truncate">Web Developer</p>
                                            </div>
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i className="fa-solid fa-plus"> </i></a>
                                    </div>
                                    <div className="hstack gap-2 mb-3">
                                        <div className="avatar">
                                            <a href="#"> <img className="avatar-img rounded-circle" src="" alt=""/> </a>
                                        </div>
                                        <div className="overflow-hidden">
                                            <a className="h6 mb-0" href="#!">Billy Vasquez </a>
                                            <p className="mb-0 small text-truncate">News anchor</p>
                                        </div>
                                        <a className="btn btn-primary rounded-circle icon-md ms-auto" href="#"><i className="bi bi-person-check-fill"> </i></a>
                                    </div>
                                    <div className="hstack gap-2 mb-3">
                                        <div className="avatar">
                                            <a href="#"> <img className="avatar-img rounded-circle" src="" alt=""/> </a>
                                        </div>
                                        <div className="overflow-hidden">
                                            <a className="h6 mb-0" href="#!">Lori Ferguson </a>
                                            <p className="mb-0 small text-truncate">Web Developer at Webestica</p>
                                        </div>
                                        <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i className="fa-solid fa-plus"> </i></a>
                                    </div>
                                    <div className="hstack gap-2 mb-3">
                                        <div className="avatar">
                                            <a href="#"> <img className="avatar-img rounded-circle" src="" alt=""/> </a>
                                        </div>
                                        <div className="overflow-hidden">
                                            <a className="h6 mb-0" href="#!">Carolyn Ortiz </a>
                                            <p className="mb-0 small text-truncate">News anchor</p>
                                        </div>
                                        <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i className="fa-solid fa-plus"> </i></a>
                                    </div>
                                    <div className="d-grid mt-3">
                                        <a className="btn btn-sm btn-primary-soft" href="#!">View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}