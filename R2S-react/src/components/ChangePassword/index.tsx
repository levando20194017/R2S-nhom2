import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import './style.css'
// interface Props {
//   title: string; // required
//   btnLabel: string; // optional
// }


export const ChangePasswordForm = () => {

    return (
        <div className="main-changePassword">
            <div className="brand d-flex">
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo-symbol.png`} alt="Avatar" style={{ height: "50px" }} />
                <h4 style={{ color: "blue", marginLeft: "10px" }}>S</h4><h4 style={{ color: "red" }}>-</h4>
                <h4 style={{ color: "green" }}>S</h4><h4 style={{ color: "orange" }}>p</h4><h4 style={{ color: "blue" }}>a</h4><h4 style={{ color: "red" }}>c</h4><h4 style={{ color: "blue" }}>e</h4></div>
            <h2 className="mt-4">Đổi mật khẩu</h2>
            <div className="main__form mt-4">
                <div className="main__form__children d-flex">
                    <form action="" method="POST" className="form" id="form-1">
                        <div className="inputPassword mt-3">
                            <input id="password" type="password" name="curPassword" placeholder="Mật khẩu" className="form-control" />
                        </div>
                        <div className="inputPassword mt-3">
                            <input id="password" type="password" name="newPassword" placeholder="Mật khẩu mới" className="form-control" />
                        </div>
                        <div className="inputPassword mt-3">
                            <input id="password" type="password" name="verPassword" placeholder="Xác nhận" className="form-control" />
                        </div>
                        <div className="showPassword d-flex mt-3 text-secondary">
                            <div className="textShow"> Sử dụng 8 ký tự trở lên và kết hợp chữ cái, chữ số và biểu tượng</div>
                        </div>
                        <div className="button-list mt-4" style={{ justifyContent: "center" }}>
                            <div>
                                <button className="btn-next">Đổi</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
