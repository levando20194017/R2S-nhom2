import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { CommentForm } from '../../components/Comment';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
export const ModalPost = (props: any) => {

    const toggle = () => {
        props.toggleFromParent();
    }
    return (
        <Modal
            isOpen={props.isOpen}
            toggle={() => { toggle() }}
            className={'modal-post-container'}
            size='lg'
            centered
        >
            <ModalHeader toggle={() => { toggle() }}>
                <div style={{ fontWeight: "400" }}>Post of</div>
                <div style={{ marginLeft: "5px", fontWeight: "bold" }}>Lê Văn Do</div>
            </ModalHeader>
            <Scrollbars style={{ height: "72vh" }}>
                <ModalBody>
                    <div className='modal-post-body'>
                        <div className="main-profile" style={{ marginTop: "-42px", padding: "10px" }}>
                            <div className="profile-main-body">
                                <div className="row">
                                    <div className="mt-2" style={{ padding: "0 30px" }}>
                                        <div className=" d-flex mt-4">
                                            <div className="col-11 d-flex">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle"
                                                        width="50" />
                                                </div>
                                                <div style={{ marginLeft: "8px" }}>
                                                    <div style={{ fontWeight: "bold" }} className="author">Lê Văn Do</div>
                                                    <div className="text-secondary">7 June at 19:30. <i className="fas fa-globe-asia"></i></div>
                                                </div>
                                            </div>
                                            <div className=" col-1" style={{ fontSize: "30px", marginLeft: "50px" }}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <div className="content">
                                                Câu hỏi áp lực nhất mỗi lần về quê:
                                                "Khi mô ra trường rứa cháu?" 🥶
                                            </div>
                                            <div className="image mt-3">
                                                <img src={`${process.env.PUBLIC_URL}/assets/img/img1.png`} alt="Avatar" />
                                            </div>
                                            <div className="d-flex mt-3" style={{ justifyContent: "space-between" }}>
                                                <div className="number-of-likes d-flex">
                                                    <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "blue", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                                        <i className="fas fa-thumbs-up" style={{ fontSize: "20px", color: "white" }}></i>
                                                    </div>
                                                    <div style={{ fontWeight: "600", marginTop: "6px", fontSize: "18px", marginLeft: "10px" }}>
                                                        999 likes
                                                    </div>
                                                </div>
                                                <div className="number-of-comments">
                                                    <div style={{ fontWeight: "600", marginTop: "6px", fontSize: "18px", marginLeft: "10px" }}>
                                                        99 comments
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-action" style={{ padding: "0 30px" }}>
                                            <hr />
                                            <div className="d-flex" style={{ justifyContent: "space-between", padding: "0 100px", marginTop: "-10px" }}>
                                                <div className="like text-secondary">
                                                    <i className="fas fa-thumbs-up"></i> Like
                                                </div>
                                                <div className="comment text-secondary">
                                                    <i className="fas fa-comment-alt"></i> Comment
                                                </div>
                                                <div className="share text-secondary">
                                                    <i className="fas fa-share"></i> Share
                                                </div>
                                            </div>
                                        </div>
                                        <CommentForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Scrollbars>
            <ModalFooter>
                <div className='media d-flex form-input-comment' style={{ width: "100%" }}>
                    <a className="pull-left" href="#"><img className="rounded-circle"
                        width="50"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></a>
                    <div className="input-comment">
                        <input className='input-comment__form' placeholder='Post a comment...' />
                        <div className='d-flex' style={{ justifyContent: "space-between", marginTop: "30px" }}>
                            <div className='d-flex input-comment__icons'>
                                <i className="fas fa-camera"></i>
                                <i className="far fa-kiss-wink-heart"></i>
                                <i className="fas fa-gift"></i>
                                <i className="fas fa-sticky-note"></i>
                            </div>
                            <div>
                                <i className="fas fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalFooter>
        </Modal>
    )

}