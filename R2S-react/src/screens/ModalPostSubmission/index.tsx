import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Scrollbars } from 'react-custom-scrollbars';
import './style.css'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
export const ModalPostSubmission = (props: any) => {

    const toggle = () => {
        props.toggleFromParent();
    }
    return (
        <Modal
            isOpen={props.isOpen}
            toggle={() => { toggle() }}
            className={'modal-postSubmission-container'}
            size='lg'
            centered
        >
            <ModalHeader toggle={() => { toggle() }}>
                Create a new post
            </ModalHeader>
            <Scrollbars style={{ height: "70vh" }}>
                <ModalBody>
                    <div className='modal-postSubmisson-body'>
                        <div className="main-profile" style={{ marginTop: "-20px" }}>
                            <div className="profile-main-body">
                                <div className="row">
                                    <div style={{ padding: "0 20px" }}>
                                        <div>
                                            <div className="d-flex">
                                                <div>
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle"
                                                        width="50" />
                                                </div>
                                                <div style={{ marginLeft: "8px" }}>
                                                    <div style={{ fontWeight: "bold" }} className="author">Lê Văn Do</div>
                                                    <div className="public-icon"><i className="fas fa-globe-asia"></i>  Public  <i className="fas fa-caret-down"></i></div>
                                                </div>
                                            </div>
                                            <div className='postSubmission-content'>
                                                <textarea className=" mt-3" name="description" placeholder='Hey Lê Văn Do, What are you thinking?'></textarea>
                                                <input className='form-control' placeholder='Input your image link...' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Scrollbars>
            <ModalFooter>
                <div className='d-flex add-post'>
                    <div className='col-9 text-secondary' style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", cursor: "pointer" }}>
                        Add to your post</div>
                    <div className='postSubmission-icons col-3'>
                        <i className="fas fa-images" style={{ color: "green" }}></i>
                        <i className="fas fa-user" style={{ color: "blue" }}></i>
                        <i className="fas fa-grin-hearts" style={{ color: "orange" }}></i>
                        <i className="fas fa-map-marker-alt" style={{ color: "red" }}></i>
                        <i className="fas fa-flag" style={{ color: "blue" }}></i>
                        <i className="fas fa-ellipsis-h" style={{ color: "gray" }}></i>
                    </div>
                </div>
                <div className='btn btn-primary' style={{ width: "100%", fontWeight: "bold" }}>
                    Post
                </div>
            </ModalFooter>
        </Modal>
    )

}