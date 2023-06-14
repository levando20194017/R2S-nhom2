import React, { Component, useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './style.css'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useSelector } from 'react-redux';
import { handleAddNewPost } from '../../services/postService';
import axios, { AxiosResponse } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ResponseData {
    errCode: number;
    message: string;
}


export const ModalPostSubmission = (props: any) => {
    const [content, setContent] = useState<string>('');
    const [img_url, setImg_url] = useState<string>('');
    const [isPostDisabled, setIsPostDisabled] = useState<boolean>(true);
    const [message, setMessage] = useState<string>('');

    const user = useSelector(state => (state as any).user)
    const userData = user.userInfo;

    const toggle = () => {
        props.toggleFromParent();
    }

    useEffect(() => {
        setIsPostDisabled(content.trim().length === 0 && img_url.trim().length === 0);
    }, [content, img_url]);

    // useEffect(() => {
    //     if (message) {
    //         alert(message);
    //     }
    // }, [message]);
    const handlePost = async () => {

        const data = {
            userID: userData.id,
            content: content,
            img_url: img_url
        }
        try {
            const response: AxiosResponse<ResponseData> = await handleAddNewPost(userData.id, content, img_url);
            if (response.data && response.data.errCode === 0) {
                // setMessage(response.data.message);
                toast.success(<span onClick={() => toast.dismiss()}> Add new post success!</span>, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                toggle();
            }
            if (response.data && response.data.errCode !== 0) {
                setMessage(response.data.message);
                toast.error(<span onClick={() => toast.dismiss()}> Add new post failed!</span>, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <Modal
            isOpen={props.isOpen}
            toggle={() => { toggle() }}
            className={'modal-postSubmission-container'}
            size='lg'
            centered
        >
            <ToastContainer />
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
                                                    <img src={userData.img_url} alt="Avatar" className="rounded-circle"
                                                        width="50" height={50} />
                                                </div>
                                                <div style={{ marginLeft: "8px" }}>
                                                    <div style={{ fontWeight: "bold" }} className="author">{userData.fullName}</div>
                                                    <div className="public-icon"><i className="fas fa-globe-asia"></i>  Public  <i className="fas fa-caret-down"></i></div>
                                                </div>
                                            </div>
                                            <div className='postSubmission-content'>
                                                <textarea className=" mt-3" name="description" placeholder={`Hey ${userData.fullName}, What are you thinking?`}
                                                    value={content} onChange={e => setContent(e.target.value)}></textarea>
                                                <input className='form-control' placeholder='Input your image link...'
                                                    value={img_url} onChange={e => setImg_url(e.target.value)} />
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
                <button className='btn btn-primary' style={{ width: "100%", fontWeight: "bold" }} onClick={handlePost} disabled={isPostDisabled}>
                    Post
                </button>
            </ModalFooter>
        </Modal>
    )
}