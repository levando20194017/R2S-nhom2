import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import './style.css'

// interface Props {
//   title: string; // required
//   btnLabel: string; // optional
// }


export const ForgotPassword = () => {

    return (
        <div className="main-forgotPassword">
            <div className="row">
                <div className="brand d-flex">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/logo-symbol.png`} alt="Avatar" style={{ height: "50px" }} />
                    <h4 style={{ color: "blue", marginLeft: "10px" }}>S</h4><h4 style={{ color: "red" }}>-</h4>
                    <h4 style={{ color: "green" }}>S</h4><h4 style={{ color: "orange" }}>p</h4><h4 style={{ color: "blue" }}>a</h4><h4 style={{ color: "red" }}>c</h4><h4 style={{ color: "blue" }}>e</h4></div>
                <div className="col-8 offset-2">
                    <div className="panel panel-default">
                        <div className="text-center">
                            <h3><i className="fa fa-lock fa-4x mt-4"></i></h3>
                            <h2 className="text-center mt-5">Forgot Password?</h2>
                            <p>You can reset your password here.</p>
                            <div className="panel-body">
                                <form id="register-form" role="form" autoComplete="off" className="form" method="post">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <input id="email" name="email" placeholder="email address" className="form-control" type="email" />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input style={{ width: "100%" }} name="recover-submit" className="btn btn-primary btn-block" value="Reset Password" type="submit" />
                                    </div>
                                    <input type="hidden" className="hide" name="token" id="token" value="" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
