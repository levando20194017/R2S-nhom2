import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import background from "../../assets/img/background.jpg"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Scrollbars from "react-custom-scrollbars";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllPostById } from "../../services/postService";
import { getAllUsers } from "../../services/userService";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { handleLikePost } from "../../services/postService";
import { getAllCommentById } from "../../services/commentService";
import { getAllLikesOfPost } from "../../services/postService";
import { ModalPostSubmission } from "../../screens/ModalPostSubmission";
import { ModalPost } from "../../screens/ModalPost";
import moment from 'moment';
interface Post {
    id: string;
    img_url: string;
    createdAt: string;
    content: string;
    isOpenModalComment: boolean;
}
interface LikePost {
    id: string;
    userID: string;
    postID: string;
}
interface Comment {
    id: string;
    userID: string;
    content: string;
    createdAt: string;
}
interface User {
    fullName: string;
    img_url: string
}
export const HomeContentForm = () => {
    const [listComments, setListComments] = useState<Comment[][]>([])
    const [likePosts, setLikePosts] = useState<LikePost[][]>([])
    const [isLiked, setIsLiked] = useState<boolean[]>([false]);
    const [users, setUsers] = useState<User[]>([{
        img_url: '',
        fullName: ''
    }])
    const user = useSelector(state => (state as any).user)
    const userData = user.userInfo;

    const [listPosts, setListPosts] = useState<Post[]>([{
        img_url: '',
        content: '',
        id: '',
        createdAt: '',
        isOpenModalComment: false
    }]);
    const handleAddNewComment = (post: Post) => {
        const updatedPost = { ...post, isOpenModalComment: true };
        setListPosts(listPosts.map(p => p.id === post.id ? updatedPost : p));
    }
    const toggleCommentModal = (post: Post) => {
        const updatedPost = { ...post, isOpenModalComment: !post.isOpenModalComment };
        setListPosts(listPosts.map(p => p.id === post.id ? updatedPost : p));
    };
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            const data = await getAllPostById('ALL');
            setListPosts(data.data.posts);
            if (isMounted) {
                let userArray = [];
                let commentsArray = [];
                let likePostsArray = [];
                for (let i = 0; i < data.data.posts.length; i++) {
                    const response = await getAllUsers(data.data.posts[i].userID);
                    const user = response.data.users;
                    userArray.push(user);

                    const responseOfCommentPost = await getAllCommentById(data.data.posts[i].id);
                    const comments = responseOfCommentPost.data.comments;
                    commentsArray.push(comments);

                    const responseOfLikePost = await getAllLikesOfPost(data.data.posts[i].id);
                    const likeposts = responseOfLikePost.data.likes;
                    likePostsArray.push(likeposts);
                }
                setUsers(userArray);
                setListComments(commentsArray);
                setLikePosts(likePostsArray);
            }
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);
    const [isOpenModal, setIsOpenModal] = useState<Boolean>(false)
    const handleAddPostSubmission = () => {
        setIsOpenModal(true);
    }
    const togglePostSubmissionModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    // Lưu trạng thái like của bài viết vào localStorage
    const handleLikeThisPost = async (index: number, postID: string) => {
        const response = await handleLikePost(userData.id, postID);
        if (response.data.errCode === 1) {
            const newIsLiked = [...isLiked];
            newIsLiked[index] = false;
            setIsLiked(newIsLiked);
            localStorage.setItem(postID, false.toString()); // Lưu giá trị false vào localStorage

            const likePostsArray = [...likePosts]
            const responseOfLikePost = await getAllLikesOfPost(postID);
            const likeposts = responseOfLikePost.data.likes;
            likePostsArray[index] = likeposts;
            setLikePosts(likePostsArray);

            // ...
        } else {
            const newIsLiked = [...isLiked];
            newIsLiked[index] = true;
            setIsLiked(newIsLiked);
            localStorage.setItem(postID, true.toString()); // Lưu giá trị true vào localStorage

            const likePostsArray = [...likePosts]
            const responseOfLikePost = await getAllLikesOfPost(postID);
            const likeposts = responseOfLikePost.data.likes;
            likePostsArray[index] = likeposts;
            setLikePosts(likePostsArray);
            // ...
        }
    }

    // Lấy giá trị trạng thái like từ localStorage và thiết lập màu xanh cho nút like
    useEffect(() => {
        const newIsLiked = [...isLiked];
        listPosts.forEach((post, index) => {
            const isPostLiked = localStorage.getItem(post.id); // Lấy giá trị trạng thái like từ localStorage
            if (isPostLiked === "true") {
                newIsLiked[index] = true;
            }
        });
        setIsLiked(newIsLiked);
    }, [listPosts]);


    return (
        <>
            <div className="col-md-8 col-lg-6 vstack gap-4" style={{ marginLeft: "-10px" }}>
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
                    <div className="cardx card card-body">
                        <div className="d-flex mb-3">
                            <div className="avatar avatar-xs me-2">
                                <Link to="/profile">
                                    <img className="avatar-img rounded-circle" src={userData.img_url} alt="Avatar" />
                                </Link>

                            </div>
                            <form className="w-100" >
                                <textarea className="form-control pe-4 border-0"
                                    style={{ cursor: "pointer" }}
                                    rows={2} data-autoresize placeholder="Share yours thoughts..."
                                    onClick={handleAddPostSubmission}></textarea>
                                <ModalPostSubmission
                                    isOpen={isOpenModal}
                                    toggleFromParent={togglePostSubmissionModal}
                                />
                            </form>
                        </div>
                        <div>
                            <ul className="nav nav-pills nav-stack small fw-normal">
                                <li className="nav-item">
                                    <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto">
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
                            </ul>
                        </div>
                    </div>
                    {listPosts && listPosts.map((post, index) => {
                        return (
                            <div className="cardx card mt-5" style={{ height: "auto", marginBottom: "-30px" }}>
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-story me-2">
                                                <a href="#!"> <img className="avatar-img rounded-circle" src={users[index]?.img_url} alt="Admin" /> </a>
                                            </div>
                                            <div>
                                                <div className="nav nav-divider">
                                                    <h6 className="nav-item card-title mb-0"> <a href="#!" style={{ color: "black", textDecoration: "none" }}>{users[index]?.fullName}</a></h6>
                                                    {/* <span className="nav-item small">6:30am 14/6/2023</span> */}
                                                </div>
                                                <p className="mb-0 small"> {moment(`${post.createdAt}`).format('HH:mm DD/MM/YYYY')}. <i className="fas fa-globe-asia"></i></p>
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
                                    <p>{post.content}</p>
                                    <img className="card-img" src={post.img_url} alt=" " />
                                </div>
                                <ul className="nav nav-stack py-3 small card-footer">
                                    <li className="nav-item">
                                        {isLiked[index] ? (<a style={{ color: "blue" }}
                                            className="nav-link active" href="#!" data-bs-container="body"
                                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                                            data-bs-custom-class="tooltip-text-start"
                                            onClick={() => handleLikeThisPost(index, post.id)}
                                        > <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked ({likePosts[index] && (likePosts[index].length)})</a>)
                                            : (<a className="nav-link active" href="#!" data-bs-container="body"
                                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                                                data-bs-custom-class="tooltip-text-start"
                                                onClick={() => handleLikeThisPost(index, post.id)}
                                            > <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked ({likePosts[index] && (likePosts[index].length)})</a>)}
                                    </li>
                                    <li className="nav-item" onClick={() => handleAddNewComment(post)}>
                                        <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments ({listComments[index] && (listComments[index].length)})</a>
                                    </li>
                                    <ModalPost
                                        isOpen={post.isOpenModalComment}
                                        toggleFromParent={() => toggleCommentModal(post)}
                                        postId={post.id}
                                        content={post.content}
                                        img_urlPost={post.img_url}
                                        userID={userData.id}
                                        author={userData.fullName}
                                        img_urlAuthor={userData.img_url}
                                        createdAt={post.createdAt}
                                        isLiked={isLiked[index]}
                                        likePosts={likePosts[index]}
                                    />
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
                            </div>
                        )
                    })}
                </Scrollbars>
            </div>
        </>
    )
}