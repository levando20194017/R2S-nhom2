import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import background from "../../assets/img/background.jpg"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getAllUsers } from "../../services/userService";
import Scrollbars from "react-custom-scrollbars";
interface User {
    fullName: string;
    email: string;
    img_url: string
}
export const HomeRightForm = (props: any) => {
    const [users, setUsers] = useState<User[]>([{
        fullName: '',
        email: '',
        img_url: ''
    }]);
    const [limit, setLimit] = useState(10); // Số lượng phần tử hiển thị

    const visibleUsers = users.slice(0, limit); // Lấy ra danh sách người dùng hiển thị

    const handleViewMoreClick = () => {
        setLimit(prevLimit => prevLimit + 10); // Tăng số lượng phần tử hiển thị lên 10
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllUsers('ALL');
            if (response.data && response.data.errCode === 0) {
                setUsers(response.data.users);
            }
        }
        fetchData();
    }, [])
    return (
        <div className="col-lg-3" style={{ marginLeft: "5px" }}>
            <div className="col-sm-6 col-lg-12">
                <Scrollbars style={{ height: "92vh" }}>
                    <div className="cardx">
                        <div className="card-header pb-0 border-0 mt-3">
                            <h5 className="card-title mb-0" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Suggestion</h5>
                        </div>
                        <div className="card-body mt-3">
                            {visibleUsers && visibleUsers.map((user, index) => {
                                return (
                                    <div className="hstack gap-2 mb-3" key={index}>
                                        <div className="avatar">
                                            <a href="#!"><img className="avatar-img rounded-circle" src={user.img_url} alt="" /></a>
                                        </div>
                                        <div className="overflow-hidden">
                                            <a className="h6 mb-0" href="#!" style={{ textDecoration: "none" }}>{user.fullName} </a>
                                            <p className="mb-0 small text-truncate">News anchor</p>
                                        </div>
                                        <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i className="fa-solid fa-plus"> </i></a>
                                    </div>
                                )
                            })}
                            {limit < users.length && (
                                <div className="d-grid mt-3">
                                    <button className="btn btn-sm btn-primary-soft view-more" onClick={handleViewMoreClick}>View more</button>
                                </div>
                            )}
                        </div>
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
}