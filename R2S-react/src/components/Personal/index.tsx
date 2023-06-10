import React, { useState, ChangeEvent, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from "../../store/actions/actionTypes";
import "../../assets/css/index.css";
import "./style.css"
import Spinner from "react-bootstrap/Spinner";
import Cookies from 'js-cookie';
import { editUserService } from "../../services/userService";

interface UserData {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
    gender: boolean;
}


export const PersonalForm = () => {
    //     const userState = Cookies.get('userState');
    // var user = {};

    // // Kiểm tra nếu cookie tồn tại
    // if (userState) {
    //     // Chuyển đổi giá trị cookie thành đối tượng JSON
    //     user = JSON.parse(userState);
    // }
    const [message, setMessage] = useState<string>('');

    const user = useSelector(state => (state as any).user)
    const userData = user.userInfo;
    const navigate = useNavigate();
    const dispath = useDispatch()
    const handleChangePassword = () => {
        navigate("/changepassword")
    }

    const [isEditing, setIsEditing] = useState(false);
    const [updatedUserData, setUpdatedUserData] = useState(userData);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        const result = await editUserService(updatedUserData);
        setMessage(result.data.message)
        if (result.data && result.data.errCode === 0) {
            dispath({ type: Actions.UPDATE_USER, userInfo: updatedUserData })
            setIsEditing(false);
        }
    };
    useEffect(() => {
        if (message !== '') {
            const timerId = setTimeout(() => {
                setMessage('');
            }, 3000);
            return () => clearTimeout(timerId);
        }
    }, [message]);

    const handleCancelClick = () => {
        setUpdatedUserData(userData);
        setIsEditing(false);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUpdatedUserData((prevState: UserData) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setUpdatedUserData((prevState: UserData) => ({
            ...prevState,
            [name]: value === "true",
        }));
    };
    return (
        <div className="main-profile">
            <div className="profile-main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={userData.img_url} alt="Admin" className="rounded-circle"
                                        width="150" />
                                    <div className="mt-3">
                                        <h4>{userData.fullName}</h4>
                                        <p className="text-secondary mb-1 mt-4">Full Stack Developer</p>
                                        <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                        <button className="btn btn-primary">Follow</button>
                                        <button className="btn btn-outline-primary" style={{ marginLeft: "10px" }}>Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-globe mr-2 icon-inline">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path
                                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                        </path>
                                    </svg> Website</h6>
                                    <span className="text-secondary">https://bootdey.com</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-github mr-2 icon-inline">
                                        <path
                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                        </path>
                                    </svg> Github</h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-twitter mr-2 icon-inline text-info">
                                        <path
                                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                        </path>
                                    </svg> Twitter</h6>
                                    <span className="text-secondary">@bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-instagram mr-2 icon-inline text-danger">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg> Instagram</h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-facebook mr-2 icon-inline text-primary">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg> Facebook</h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3 infor">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={updatedUserData.fullName}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            userData.fullName
                                        )}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="email"
                                                value={updatedUserData.email}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            userData.email
                                        )}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                value={updatedUserData.phoneNumber}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            userData.phoneNumber
                                        )}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="address"
                                                value={updatedUserData.address}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            userData.address
                                        )}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Gender</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {isEditing ? (
                                            <select
                                                name="gender"
                                                value={updatedUserData.gender}
                                                onChange={handleSelectChange}
                                            >
                                                <option value={false.toString()}>Nữ</option>
                                                <option value={true.toString()}>Nam</option>
                                            </select>
                                        ) : (
                                            userData.gender ? "Nam" : "Nữ"
                                        )}
                                    </div>
                                </div>
                                <hr />
                                {message === 'Update user success!' ? (
                                    <div className="text-success">{message}</div>
                                ) : (
                                    <div className="text-danger">{message}</div>
                                )}
                                <div className="row">
                                    <div className="col-2">
                                        {isEditing ? (
                                            <div className="d-flex">
                                                <button className="btn btn-success" onClick={handleSaveClick}>
                                                    Save
                                                </button>
                                                <button className="btn btn-danger" onClick={handleCancelClick}>
                                                    Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            <button className="btn btn-info" onClick={handleEditClick}>
                                                Edit
                                            </button>
                                        )}
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-info" onClick={handleChangePassword}>
                                            Change password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 style={{ textAlign: "center", fontWeight: "bold" }}>More details</h5>
                                <div className="education">
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "17px", marginBottom: "5px", color: "blue" }}>
                                            <i className="fas fa-school"></i> Education
                                        </div>
                                        <div style={{ marginLeft: "10px" }}>
                                            Student at Ha Noi university of science and technology
                                        </div>
                                        <div style={{ marginLeft: "10px" }}>
                                            Major: Computer science - IT1
                                        </div>
                                    </div>
                                </div>
                                <div className="favourite">
                                    <div style={{ fontWeight: "600", fontSize: "17px", marginBottom: "5px", color: "green" }} className="mt-2">
                                        <i className="fas fa-star"></i>
                                        Favourite
                                    </div>
                                    <div className="d-flex" style={{ justifyContent: "space-between", fontWeight: "500", padding: "0 10px" }}>
                                        <div>
                                            <i className="fas fa-futbol"></i> Play Soccer
                                        </div>
                                        <div>
                                            <i className="fas fa-guitar"></i> Play guitar
                                        </div>
                                        <div>
                                            <i className="fas fa-tv"></i> Watch movie
                                        </div>
                                        <div>
                                            <i className="fas fa-basketball-ball"></i> Play basketball
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
