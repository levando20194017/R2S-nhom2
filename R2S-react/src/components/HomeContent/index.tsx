import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import background from "../../assets/img/background.jpg"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Scrollbars from "react-custom-scrollbars";


export const HomeContentForm = () => {
    return (
        <>
            <div className="col-md-8 col-lg-6 vstack gap-4">
                <Scrollbars style={{ height: "92vh" }}>
                    <div className="d-flex gap-2 mb-n3">
                        <div className="position-relative">
                            <div className="cardx border border-2 border-dashed h-150px px-4 px-sm-5 shadow-none d-flex align-items-center justify-content-center text-center">
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
                    <div className="cardx card-body mt-2">
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

                                <li className="nav-item dropdown ms-lg-auto">
                                    <a className="nav-link bg-light py-1 px-2 mb-0" href="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cardx">
                        <div className="card-header border-0 pb-0">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center mt-5">
                                    <div className="avatar avatar-story me-2">
                                        <a href="#!"> <img className="avatar-img rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" /> </a>
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
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <p>Hello</p>
                            <img className="card-img" src={background} alt=" " />
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
                                    <li><hr className="dropdown-divider" /></li>
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
                </Scrollbars>
            </div>
        </>
    )
}