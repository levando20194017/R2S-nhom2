import React, { useState } from "react";
import "./login.css";

import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

// interface Props {
//   title: string; // required
//   btnLabel: string; // optional
// }


export const LoginForm = () => {

  return (
    <div className="main-login">
      <div className="brand d-flex">
        <img src={`${process.env.PUBLIC_URL}/assets/img/logo-symbol.png`} alt="Avatar" style={{ height: "50px" }} />
        <h4 style={{ color: "blue", marginLeft: "10px" }}>S</h4><h4 style={{ color: "red" }}>-</h4>
        <h4 style={{ color: "green" }}>S</h4><h4 style={{ color: "orange" }}>p</h4><h4 style={{ color: "blue" }}>a</h4><h4 style={{ color: "red" }}>c</h4><h4 style={{ color: "blue" }}>e</h4></div>
      <h2 className="mt-4">Đăng nhập</h2>
      <div className="main__form mt-4">
        <div className="main__form__children d-flex">
          <form action="" method="POST" className="form" id="form-1">
            <div className="inputEmail">
              <input id="email" type="email" name="LastName" placeholder="Email" className="form-control" />
            </div>
            <div className="usePresentEmail">
              <a href="#">Sử dụng địa chỉ email hiện tại của tôi</a>
            </div>
            <div className="inputPassword mt-3">
              <input id="password" type="password" name="password" placeholder="Mật khẩu" className="form-control" />
            </div>
            <div className="showPassword d-flex">
              <div>
                <input type="checkbox" id="isShowPassword" name="isShowPassword" value="Hiện mật khẩu" />
              </div>
              <div className="textShow"> Hiện mật khẩu</div>
            </div>
            <div className="button-list mt-4">
              <div>
                <button className="btn-forgot">Forgot password</button>
              </div>
              <div>
                <button className="btn-next">Đăng nhập</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
