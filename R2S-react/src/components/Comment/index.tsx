import './style.css'
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/userService';
interface UserComment {
    id: string;
    fullName: string;
    img_url: string;
}
export const CommentForm = (props: any) => {
    const [userComment, setUserComment] = useState<UserComment>({
        id: '',
        fullName: '',
        img_url: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllUsers(props.comment.userID);
            setUserComment(data.data.users)
        }
        fetchData();
    }, [props.comment.userID]);

    return (
        <div className="media d-flex">
            <a className="pull-left" href="#"><img className="rounded-circle"
                width="50" height={50}
                src={userComment.img_url} alt="" /></a>
            <div className="media-body">
                <h6 className="media-heading">{userComment.fullName}</h6>
                <p>{props.comment.content}</p>
                <div className='d-flex' style={{ justifyContent: "space-between" }}>
                    <ul className="list-unstyled list-inline media-detail pull-lef d-flex">
                        <li><i className="fa fa-calendar"></i>{props.comment.createdAt}</li>
                        <li><i className="fa fa-thumbs-up"></i>13</li>
                    </ul>
                    <ul className="list-unstyled list-inline media-detail pull-right d-flex">
                        {props.userID === props.comment.userID ? <li><a href=''>Edit</a></li> : ""}
                        {props.userID === props.comment.userID ? <li className=""><a href="">Delete</a></li> : ""}
                    </ul>
                </div>
            </div>
        </div>

    )
}