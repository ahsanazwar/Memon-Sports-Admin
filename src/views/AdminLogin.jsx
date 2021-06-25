import React from "react";
import {Form} from 'react-bootstrap';

function AdminLogin() {
    return(
        <>
            <div className="adminLogin">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form validate-form">
                                <span className="login100-form-title p-b-43">
                                    Login to continue
                                </span>                          
                                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <Form.Control type="email" placeholder="email" />
                                    <span className="focus-input100"></span>
                                    <span className="label-input100">Email</span>
                                </div>                                
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <Form.Control type="password" placeholder="pass" />
                                    <span className="focus-input100"></span>
                                    <span className="label-input100">Password</span>
                                </div>
                                <div className="flex-sb-m w-full p-t-3 p-b-32">
                                    <div>
                                        <a href="#" className="txt1">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Login
                                    </button>
                                </div>                              
                                {/* <div className="text-center p-t-46 p-b-20">
                                    <span className="txt2">
                                        or sign up using
                                    </span>
                                </div>

                                <div className="login100-form-social flex-c-m">
                                    <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                                        <i className="fa fa-facebook-f" aria-hidden="true"></i>
                                    </a>

                                    <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </div> */}
                            </form>
                            <div className="login100-more"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;