import React from 'react'
import { Link } from 'react-router-dom'
const LoginArea = () => {
    return (
        <>
            <section id="login_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="account_form">
                                <h3>Login</h3>
                                <form action="#">
                                    <div className="default-form-box">
                                        <label>Username or email <span>*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="default-form-box">
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="login_submit">
                                        <button className="theme-btn-one btn-black-overlay btn_md" type="submit">login</button>
                                    </div>
                                    <div className="remember_area">
                                        <label className="checkbox-default">
                                            <input type="checkbox" />
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                    <Link to="/register">Create Your Account?</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginArea
