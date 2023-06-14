import './style.css'
import React, { Component } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { getAllUsers } from '../../services/userService';
import { getAllLikesOfComment, handleLikeComment } from '../../services/commentService';
interface UserComment {
    id: string;
    fullName: string;
    img_url: string;
}
interface LikeComment {
    id: string;
    userID: string;
    commentID: string;
}
export const CommentForm = (props: any) => {
    const [likeComments, setLikeComments] = useState<LikeComment[]>([])
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [userComment, setUserComment] = useState<UserComment>({
        id: '',
        fullName: '',
        img_url: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllUsers(props.comment.userID);
            setUserComment(data.data.users);

            const responseOfLikeComment = await getAllLikesOfComment(props.comment.id);
            const likecomments = responseOfLikeComment.data.likes;
            setLikeComments(likecomments);
        };
        fetchData();
    }, [props.comment.userID, props.comment.id]);

    const handleLikeThisComment = useCallback(async (commentID: string) => {
        if (isLiked) return; // Kiểm tra giá trị isLiked hiện tại trước khi gửi request
        console.log(commentID, props.userID);

        const response = await handleLikeComment(props.userID, commentID);
        if (response.data.errCode === 1) {
            setIsLiked((prevIsLiked) => !prevIsLiked); // Cập nhật giá trị isLiked dựa trên giá trị hiện tại
            const responseOfLikeComment = await getAllLikesOfComment(commentID);
            const likecomments = responseOfLikeComment?.data?.likes;
            setLikeComments(likecomments ?? []);
        } else {
            console.log('Error'); // Xử lý lỗi ở đây
        }
    }, [isLiked, props.userID]);


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
                        <li>
                            {isLiked ? <i className="fa fa-thumbs-up" style={{ color: "blue" }} onClick={() => { handleLikeThisComment(props.comment.id) }}></i> :
                                <i className="fa fa-thumbs-up" onClick={() => { handleLikeThisComment(props.comment.id) }}></i>}
                            {likeComments && likeComments.length ? `${likeComments.length}` : ""}
                        </li>
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