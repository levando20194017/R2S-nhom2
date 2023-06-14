import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import './style.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { userChangePassword } from "../../services/userService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosResponse } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
interface ResponseData {
    errCode: number;
    message: string;
}

export const ChangePasswordForm = () => {
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();
    const user = useSelector(state => (state as any).user)
    const userData = user.userInfo;

    const formik = useFormik<any>({
        initialValues: {
            curPassword: "",
            newPassword: "",
            verPassword: "",
        },
        validationSchema: Yup.object({
            curPassword: Yup.string()
                .required("Password is required")
                .min(6, "Must be 6 characters or more"),
            newPassword: Yup.string()
                .required("New password is required")
                .min(6, "Must be 6 characters or more"),
            verPassword: Yup.string()
                .required("Confirm password is required")
                .min(6, "Must be 6 characters or more")
                .oneOf([Yup.ref('newPassword')], 'Passwords must match!')
        }),
        onSubmit: async (values) => {
            const { curPassword, newPassword, verPassword } = values
            console.log(curPassword, newPassword, verPassword);

            try {
                const response: AxiosResponse<ResponseData> = await userChangePassword(userData.id, curPassword, newPassword);
                console.log(response);

                if (response.data && response.data.errCode === 0) {
                    setMessage(response.data.message);
                    toast.success(<span onClick={() => toast.dismiss()}> You have changed password success!</span>, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    navigate("/")
                }
                if (response.data && response.data.errCode !== 0) {
                    setMessage(response.data.message)
                    toast.error(<span onClick={() => toast.dismiss()}> You have entered the wrong current password!</span>, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            } catch (error) {
                console.log(error);

            }
        }
    });
    return (
        <div className="main-changePassword">
            <ToastContainer />
            <div className="brand d-flex">
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo-symbol.png`} alt="Avatar" style={{ height: "50px" }} />
                <h4 style={{ color: "blue", marginLeft: "10px" }}>S</h4><h4 style={{ color: "red" }}>-</h4>
                <h4 style={{ color: "green" }}>S</h4><h4 style={{ color: "orange" }}>p</h4><h4 style={{ color: "blue" }}>a</h4><h4 style={{ color: "red" }}>c</h4><h4 style={{ color: "blue" }}>e</h4></div>
            <h2 className="mt-4">Đổi mật khẩu</h2>
            <div className="main__form mt-4">
                <div className="main__form__children d-flex">
                    <form action="" method="POST" className="form" id="form-1"
                        onSubmit={formik.handleSubmit}>
                        <div className="inputPassword mt-3">
                            <input id="password" type="password" name="curPassword" placeholder="Mật khẩu" className="form-control"
                                value={formik.values.curPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.curPassword && formik.errors.curPassword ? (
                                <div className="text-danger">{typeof formik.errors.curPassword === 'string' && (
                                    <div className="text-danger">{formik.errors.curPassword}</div>
                                )}</div>
                            ) : null}
                        </div>
                        <div className="inputPassword mt-3">
                            <input id="password" type="password" name="newPassword" placeholder="Mật khẩu mới" className="form-control"
                                value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.newPassword && formik.errors.newPassword ? (
                                <div className="text-danger">{typeof formik.errors.newPassword === 'string' && (
                                    <div className="text-danger">{formik.errors.newPassword}</div>
                                )}</div>
                            ) : null}
                        </div>
                        <div className="inputPassword mt-3">
                            <input id="password" type="password" name="verPassword" placeholder="Xác nhận" className="form-control"
                                value={formik.values.verPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.verPassword && formik.errors.verPassword ? (
                                <div className="text-danger">{typeof formik.errors.verPassword === 'string' && (
                                    <div className="text-danger">{formik.errors.verPassword}</div>
                                )}</div>
                            ) : null}
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
