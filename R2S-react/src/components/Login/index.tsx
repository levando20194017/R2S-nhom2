import React, { useState } from "react";
import "./login.css";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from "../../store/actions/actionTypes";

import Spinner from "react-bootstrap/Spinner";
import { handleLoginApi } from "../../services/userService";
import axios, { AxiosResponse } from 'axios';

import { useFormik } from "formik";
import * as Yup from "yup";

interface ResponseData {
  errCode: number;
  message: string;
  user: {};
  // other properties
}

export const LoginForm = () => {
  const [errMessage, setErrMessage] = useState<string>('');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispath = useDispatch()
  const handleShowPasswordChange = () => {
    setIsShowPassword(!isShowPassword);
  }
  const formik = useFormik<any>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Email is not valid"),

      password: Yup.string()
        .required("Password is required")
    }),
    onSubmit: async (values) => {
      const { email, password } = values

      try {
        const response: AxiosResponse<ResponseData> = await handleLoginApi(email, password);

        if (response.data && response.data.errCode !== 0) {
          setErrMessage(response.data.message);
        }
        if (response.data && response.data.errCode === 0) {
          setErrMessage(response.data.message);
          // userLoginSuccess(response.data.user)
          dispath({ type: Actions.USER_LOGIN_SUCCESS, userInfo: response.data.user })
          console.log('login success')
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <div className="main-login">
      <div className="brand d-flex">
        <img src={`${process.env.PUBLIC_URL}/assets/img/logo-symbol.png`} alt="Avatar" style={{ height: "50px" }} />
        <h4 style={{ color: "blue", marginLeft: "10px" }}>S</h4><h4 style={{ color: "red" }}>-</h4>
        <h4 style={{ color: "green" }}>S</h4><h4 style={{ color: "orange" }}>p</h4><h4 style={{ color: "blue" }}>a</h4><h4 style={{ color: "red" }}>c</h4><h4 style={{ color: "blue" }}>e</h4></div>
      <h2 className="mt-4">Đăng nhập</h2>
      <div className="main__form mt-4">
        <div className="main__form__children d-flex">
          <form action="" method="POST" className="form" id="form-1"
            onSubmit={formik.handleSubmit}>
            <div className="inputEmail">
              <input id="email" type="email" name="email" placeholder="Email" className="form-control"
                value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{typeof formik.errors.email === 'string' && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}</div>
              ) : null}
            </div>
            <div className="usePresentEmail">
              <a href="#">Sử dụng địa chỉ email hiện tại của tôi</a>
            </div>
            <div className="inputPassword mt-3">
              <input id="password" type={isShowPassword ? "text" : "password"} name="password" placeholder="Mật khẩu" className="form-control"
                value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{typeof formik.errors.password === 'string' && (
                  <div className="text-danger">{formik.errors.password}</div>
                )}</div>
              ) : null}
            </div>
            {errMessage === 'Ok' ? <div className="text-success">{errMessage}</div> : <div className="text-danger mt-2" style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>{errMessage}</div>}
            <div className="showPassword d-flex mt-3">
              <div>
                <input type="checkbox" id="isShowPassword" name="isShowPassword" checked={isShowPassword} onChange={handleShowPasswordChange} />
              </div>
              <div className="textShow"> Hiện mật khẩu</div>
            </div>
            <div className="button-list mt-4">
              <div>
                <button className="btn-forgot">Forgot password</button>
              </div>
              <div>
                <button type="submit" className="btn-next">Đăng nhập</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
