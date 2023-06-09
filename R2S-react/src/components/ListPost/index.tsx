import React, { useState, useEffect } from "react";
import "../../assets/css/index.css";
import "./style.css"
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { ModalPost } from "../../screens/ModalPost";
import { getAllPostById, getAllLikesOfPost, handleLikePost } from "../../services/postService";
import { useSelector } from 'react-redux';
import { getAllCommentById } from "../../services/commentService";
import moment from 'moment';
interface Comment {
    id: string;
    userID: string;
    content: string;
    createdAt: string;
}
interface LikePost {
    id: string;
    userID: string;
    postID: string;
}
interface Post {
    id: string;
    content: string;
    img_url: string;
    createdAt: string;
    isOpenModalComment: boolean;
}

export const ListPostForm = () => {
    const [listPosts, setListPosts] = useState<Post[]>([])
    const [listComments, setListComments] = useState<Comment[][]>([])
    const [likePosts, setLikePosts] = useState<LikePost[][]>([])
    const [isLiked, setIsLiked] = useState<boolean[]>([false]);
    const [post, setPost] = useState<Post>({
        id: "",
        content: "",
        img_url: "",
        createdAt: "",
        isOpenModalComment: false
    })

    const [showDropdown, setShowDropdown] = useState([false]);

    const handleAddNewComment = (post: Post) => {
        const updatedPost = { ...post, isOpenModalComment: true };
        setListPosts(listPosts.map(p => p.id === post.id ? updatedPost : p));
    }
    const toggleCommentModal = (post: Post) => {
        const updatedPost = { ...post, isOpenModalComment: !post.isOpenModalComment };
        setListPosts(listPosts.map(p => p.id === post.id ? updatedPost : p));
    };

    const handleDropdownClick = (post: Post, index: number) => {
        const newShowDropdown = [...showDropdown];
        newShowDropdown[index] = !newShowDropdown[index];
        setShowDropdown(newShowDropdown);
    };

    const handleEditClick = (post: Post, index: number) => {
        console.log('Edit selected for post:', post);
        const newShowDropdown = [...showDropdown];
        newShowDropdown[index] = false;
        setShowDropdown(newShowDropdown);
    };

    const handleDeleteClick = (post: Post, index: number) => {
        console.log('Delete selected for post:', post);
        const newShowDropdown = [...showDropdown];
        newShowDropdown[index] = false;
        setShowDropdown(newShowDropdown);
    };
    const user = useSelector(state => (state as any).user)
    const userData = user.userInfo;
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            const data = await getAllPostById(userData.id);
            setListPosts(data.data.posts);
            if (isMounted) {
                let commentsArray = [];
                let likePostsArray = [];
                for (let i = 0; i < data.data.posts.length; i++) {
                    const response = await getAllCommentById(data.data.posts[i].id);
                    const comments = response.data.comments;
                    commentsArray.push(comments);

                    const responseOfLikePost = await getAllLikesOfPost(data.data.posts[i].id);
                    const likeposts = responseOfLikePost.data.likes;
                    likePostsArray.push(likeposts);
                }
                setListComments(commentsArray);
                setLikePosts(likePostsArray);
            }
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, [userData.id]);
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
        <div className="main-profile" style={{ marginTop: "-42px", padding: "10px" }}>
            <div className="profile-main-body">
                <div className="row">
                    {listPosts.map((post: Post, index) => {
                        return (
                            <div className="card mt-2" style={{ padding: "0 30px" }}>
                                <div className="card-body d-flex mt-4">
                                    <div className="col-11 d-flex">
                                        <div>
                                            <img src={userData.img_url} alt="Admin" className="rounded-circle"
                                                width="50" height={50} />
                                        </div>
                                        <div style={{ marginLeft: "8px" }}>
                                            <div style={{ fontWeight: "bold" }} className="author">{userData.fullName}</div>
                                            <div className="text-secondary">{moment(`${post.createdAt}`).format('HH:mm DD/MM/YYYY')}. <i className="fas fa-globe-asia"></i></div>
                                        </div>
                                    </div>
                                    <div className=" col-1" style={{ fontSize: "30px", marginLeft: "50px" }}>
                                        <div className="dropdown">
                                            <i className="fas fa-ellipsis-h" onClick={() => handleDropdownClick(post, index)}></i>
                                            {showDropdown[index] && (
                                                <div className="dropdown-content">
                                                    <div onClick={() => handleEditClick(post, index)} style={{ borderBottom: "1px solid gray" }}>Edit</div>
                                                    <div onClick={() => handleDeleteClick(post, index)}>Delete</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="content">
                                        {post.content}
                                    </div>
                                    <div className="image mt-3">
                                        <img src={post.img_url} alt="Avatar" />
                                    </div>
                                    <div className="d-flex mt-3" style={{ justifyContent: "space-between" }}>
                                        <div className="number-of-likes d-flex">
                                            {likePosts[index] && (likePosts[index].length >= 1 ? <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "blue", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                                <i className="fas fa-thumbs-up" style={{ fontSize: "20px", color: "white" }}></i>
                                            </div> : "")}
                                            <div style={{ fontWeight: "600", marginTop: "6px", fontSize: "18px", marginLeft: "10px" }}>
                                                {likePosts[index] && (likePosts[index].length > 1 ? `${likePosts[index].length} likes` : likePosts[index].length ? `${likePosts[index].length} like` : "")}
                                            </div>
                                        </div>
                                        <div className="number-of-comments">
                                            <div style={{ fontWeight: "600", marginTop: "6px", fontSize: "18px", marginLeft: "10px" }}>
                                                {listComments[index] && (listComments[index].length > 1 ? `${listComments[index].length} comments` : listComments[index].length ? `${listComments[index].length} comment` : "")}
                                            </div>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="post-action" style={{ padding: "0 30px" }}>
                                    <hr />
                                    <div className="d-flex" style={{ justifyContent: "space-between", padding: "0 100px", marginTop: "-10px" }}>
                                        {isLiked[index] ? (<div className="like text-secondary" onClick={() => handleLikeThisPost(index, post.id)}>
                                            <i className="fas fa-thumbs-up" style={{ color: "blue" }}></i> <span style={{ color: "blue" }}>Like</span>
                                        </div>) :
                                            (<div className="like text-secondary" onClick={() => handleLikeThisPost(index, post.id)}>
                                                <i className="fas fa-thumbs-up" ></i> Like
                                            </div>)}
                                        <div className="comment text-secondary" onClick={() => handleAddNewComment(post)}>
                                            <i className="fas fa-comment-alt"></i> Comment
                                        </div>
                                        <div className="share text-secondary">
                                            <i className="fas fa-share"></i> Share
                                        </div>
                                    </div>
                                    <hr style={{ marginTop: "9px" }} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
