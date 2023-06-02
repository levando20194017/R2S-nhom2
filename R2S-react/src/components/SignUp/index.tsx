import React, { useState } from "react";
import "../../assets/css/index.css";

import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

// interface Props {
//   title: string; // required
//   btnLabel: string; // optional
// }


export const SignUpForm = () => {

    return (
        <div className="main">
            <div className="brand d-flex">
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo-symbol.png`} alt="Avatar" style={{ height: "50px" }} />
                <h4 style={{ color: "blue", marginLeft: "10px" }}>S</h4><h4 style={{ color: "red" }}>-</h4>
                <h4 style={{ color: "green" }}>S</h4><h4 style={{ color: "orange" }}>p</h4><h4 style={{ color: "blue" }}>a</h4><h4 style={{ color: "red" }}>c</h4><h4 style={{ color: "blue" }}>e</h4></div>
            <h2 className="mt-2">Tạo Tài khoản</h2>
            <br />
            <div className="main__form">
                <div className="main__form__children d-flex">
                    <form action="" method="POST" className="form col-6" id="form-1">
                        <div className="inputBox">
                            <input id="fullName" type="text" name="fullName" placeholder="Tên đầy đủ" className="form-control" />
                            <div className="form-message"></div>
                        </div>
                        <div className="inputEmail">
                            <input id="email" type="email" name="LastName" placeholder="Email" className="form-control" />
                            <p>Bạn có thể sử dụng chữ cái, số và dấu chấm</p>
                        </div>
                        <div className="usePresentEmail">
                            <a href="#">Sử dụng địa chỉ email hiện tại của tôi</a>
                        </div>
                        <div className="inputPassword d-flex">
                            <div>
                                <input id="password" type="password" name="password" placeholder="Mật khẩu" className="form-control" />
                            </div>
                            <div>
                                <input id="verPassword" type="password" name="verPassword" placeholder="Xác nhận" className="form-control" />
                            </div>
                        </div>
                        <p>Sử dụng 8 ký tự trở lên và kết hợp chữ cái, chữ số và biểu tượng</p>
                        <div className="showPassword d-flex">
                            <div>
                                <input type="checkbox" id="isShowPassword" name="isShowPassword" value="Hiện mật khẩu" />
                            </div>
                            <div className="textShow"> Hiện mật khẩu</div>
                        </div>
                        <div className="button-list">
                            <div>
                                <button className="btn-signUP">Đăng nhập</button>
                            </div>
                            <div>
                                <button className="btn-next">Tiếp theo</button>
                            </div>
                        </div>
                    </form>
                    <div className="google-image col-5 offset-1">
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" />
                        <figcaption>ShareSpace. Không gian giải trí, kết nối tới mọi người.</figcaption>
                    </div>
                </div>
            </div>
        </div>
    );
};
