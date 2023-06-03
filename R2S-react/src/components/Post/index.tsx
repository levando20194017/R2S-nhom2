import React, { useState } from "react";
import "../../assets/css/index.css";
import "./style.css"
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

// interface Props {
//   title: string; // required
//   btnLabel: string; // optional
// }


export const PostForm = () => {

    return (
        <div className="main-profile" style={{ marginTop: "-42px", padding: "10px" }}>
            <div className="profile-main-body">
                <div className="row">
                    <div className="card">
                        <div className="card-body d-flex mt-4">
                            <div className="col-1 offset-1">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle"
                                    width="75" />
                            </div>
                            <div className="inputPassword mt-3 col-9">
                                <input id="post" type="text" name="post" placeholder="Hey Lê Văn Do, what are you thinking?" className="form-control" />
                            </div>
                        </div>
                        <div className="col-8 offset-2 d-flex text-secondary" style={{ justifyContent: "space-between", fontSize: "20px", fontWeight: "500", marginBottom: "10px" }}>
                            <div>
                                <i className="fas fa-video" style={{ color: "red" }}></i> Live video
                            </div>
                            <div>
                                <i className="fas fa-images" style={{ color: "green" }}></i> Image/Video
                            </div>
                            <div>
                                <i className="fas fa-grin-hearts" style={{ color: "orange" }}></i> Feeling/Activity
                            </div>
                        </div>
                        <div className="d-flex mt-5">
                            <div className="col-6 offset-1 posts" style={{ fontWeight: "bold", marginTop: "5px" }}>
                                Posts
                            </div>
                            <div className="d-flex col-5 managePosts">
                                <div className="d-flex col-12">
                                    <div className="col-4 filter">
                                        <i className="fas fa-sliders-h"></i> Filter
                                    </div>
                                    <div className="col-5 filter" style={{ marginLeft: "10px" }}>
                                        <i className="fas fa-cog"></i> Manage posts
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex option-view">
                            <div className="col-5 offset-1 view active">
                                <i className="fas fa-bars"></i> View by list
                            </div>
                            <div className="d-flex col-5 view">
                                <i className="fas fa-th-large "></i> Grid view
                            </div>
                        </div>
                    </div>
                    <div className="card mt-2" style={{ padding: "0 30px" }}>
                        <div className="card-body d-flex mt-4">
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
                            <hr style={{ marginTop: "9px" }} />
                        </div>
                    </div>
                    <div className="card mt-2" style={{ padding: "0 30px" }}>
                        <div className="card-body d-flex mt-4">
                            <div className="col-11 d-flex">
                                <div>
                                    <img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/340659565_5588976784537857_4663665704326849673_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=soqG4OjRqowAX_qjVqc&_nc_ht=scontent.fhan14-2.fna&oh=00_AfD7_Ol5gwRwKyLTSSf4vGiT5m1MdXcLe1rgmdu5s9BC8w&oe=6480B456" alt="Admin" className="rounded-circle"
                                        width="50" />
                                </div>
                                <div style={{ marginLeft: "8px" }}>
                                    <div className="d-flex author">
                                        <div style={{ fontWeight: "bold" }}>Lê Văn Do</div>
                                        <div style={{ marginLeft: "5px" }}> đã chia sẻ 1 bài viết</div>
                                    </div>
                                    <div className="text-secondary">7 June at 19:30. <i className="fas fa-globe-asia"></i></div>
                                </div>
                            </div>
                            <div className=" col-1" style={{ fontSize: "30px", marginLeft: "50px" }}>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div className="content" style={{ marginLeft: "30px" }}>
                            Tuân lốc xoáy 🥶
                        </div>
                        <div className="post-content-share">
                            <div className="card">
                                <div className="d-flex" >
                                    <div className="image" >
                                        <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.18169-9/20799159_337157193410403_6799242301083167581_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9yYaT-hoaFUAX_ev3Hy&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBHjJLuNeVI0YUcG0JGks04lfigK3rzhA5crQ4vW0TyAw&oe=64A2D600" alt="Avatar" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} />
                                    </div>
                                </div>
                                <div className="card-body d-flex mt-4">
                                    <div className="col-11 d-flex">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/img/tuan.png`} alt="Admin" className="rounded-circle"
                                                width="50" height={50} />
                                        </div>
                                        <div style={{ marginLeft: "8px" }}>
                                            <div style={{ fontWeight: "bold" }} className="author">Trần Quốc Tuân</div>
                                            <div className="text-secondary">7 June at 19:30. <i className="fas fa-globe-asia"></i></div>
                                        </div>
                                    </div>
                                    <div className=" col-1" style={{ fontSize: "30px", marginLeft: "50px" }}>
                                        <i className="fas fa-ellipsis-h"></i>
                                    </div>
                                </div>
                                <div className="content" style={{ marginBottom: "20px", marginLeft: "20px" }}>
                                    Người lái đò của ae skay đây😁😁
                                    Lục đk cái ảnh mà cười ko nhặt đk mồm😂😂
                                    Kp bnhiu năm về trước nữa !!! 😀
                                </div>

                            </div>
                        </div>
                        <div className="d-flex mt-3" style={{ justifyContent: "space-between", padding: "0 30px" }}>
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
                            <hr style={{ marginTop: "9px" }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
