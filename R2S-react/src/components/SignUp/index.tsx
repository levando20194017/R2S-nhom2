import React, { useState } from "react";
import "../../assets/css/index.css";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Spinner from "react-bootstrap/Spinner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSignUpApi } from "../../services/userService";
import axios, { AxiosResponse } from 'axios';

interface ResponseData {
    errCode: number;
    message: string;
}

export const SignUpForm = () => {
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();
    const dispath = useDispatch()
    const formik = useFormik<any>({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required("Full name is required"),

            email: Yup.string()
                .required("Email is required")
                .email("Email is not valid"),

            password: Yup.string()
                .required("Password is required")
                .min(6, "Must be 6 characters or more"),

            confirmPassword: Yup.string()
                .required("Confirm password is required")
                .min(6, "Must be 6 characters or more")
                .oneOf([Yup.ref('password')], 'Passwords must match')
        }),
        onSubmit: async (values) => {
            const { fullName, email, password } = values

            try {
                const response: AxiosResponse<ResponseData> = await handleSignUpApi(email, password, fullName);
                if (response.data && response.data.errCode === 0) {
                    setMessage(response.data.message);
                    navigate("/login")
                }
                if (response.data && response.data.errCode !== 0) {
                    setMessage(response.data.message)
                }
            } catch (error) {
                console.log(error);

            }
        }
    });

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
                    <form action="" method="POST" className="form col-6" id="form-1"
                        onSubmit={formik.handleSubmit}>
                        <div className="inputBox">
                            <input id="fullName" type="text" name="fullName" placeholder="Tên đầy đủ" className="form-control"
                                value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.fullName && formik.errors.fullName ? (
                                <div className="text-danger">{typeof formik.errors.fullName === 'string' && (
                                    <div className="text-danger">{formik.errors.fullName}</div>
                                )}</div>
                            ) : null}
                        </div>
                        <div className="inputEmail">
                            <input id="email" type="email" name="email" placeholder="Email" className="form-control"
                                value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{typeof formik.errors.email === 'string' && (
                                    <div className="text-danger">{formik.errors.email}</div>
                                )}</div>
                            ) : <p>Bạn có thể sử dụng chữ cái, số và dấu chấm</p>}

                        </div>
                        <div className="usePresentEmail">
                            <a href="#">Sử dụng địa chỉ email hiện tại của tôi</a>
                        </div>
                        <div className="inputPassword d-flex">
                            <div>
                                <input id="password" type="password" name="password" placeholder="Mật khẩu" className="form-control"
                                    value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-danger">{typeof formik.errors.password === 'string' && (
                                        <div className="text-danger" style={{ fontSize: "12px" }}>{formik.errors.password}</div>
                                    )}</div>
                                ) : null}
                            </div>
                            <div>
                                <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Xác nhận" className="form-control"
                                    value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div className="text-danger">{typeof formik.errors.confirmPassword === 'string' && (
                                        <div className="text-danger" style={{ fontSize: "12px" }}>{formik.errors.confirmPassword}</div>
                                    )}</div>
                                ) : null}
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
                                <button type="submit" className="btn-next">Tiếp theo</button>
                            </div>
                        </div>
                        {message === 'Ok' ? <div className="text-success">{message}</div> : <div className="text-danger mt-3" style={{ fontSize: "14px" }}>{message}</div>}
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
