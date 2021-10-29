import React from 'react'

const TopLogin = () => {
    return (
        <>
            <div className="col-12">
                <div className="user-actions accordion">
                    <h3>
                        <i className="fa fa-file"></i>
                        Returning customer?
                        <a className="Returning" href="#!" data-toggle="collapse" data-target="#checkout_login"
                            aria-expanded="true">Click here to login</a>
                    </h3>
                    <div id="checkout_login" className="collapse" data-parent="#checkout_login">
                        <div className="checkout_info">
                            <p>If you have shopped with us before, please enter your details in the boxes below. If
                                you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                            <form action="#">
                                <div className="form_group default-form-box">
                                    <label>Username or email <span>*</span></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form_group default-form-box">
                                    <label>Password <span>*</span></label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form_group group_3 default-form-box">
                                    <button className="theme-btn-one btn-black-overlay btn_md"
                                        type="submit">Login</button>
                                    <label className="checkbox-default">
                                        <input type="checkbox" />
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <a href="#!">Lost your password?</a>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="user-actions accordion">
                    <h3>
                        <i className="fa fa-file"></i>
                        Returning customer?
                        <a className="Returning" href="#!" data-toggle="collapse" data-target="#checkout_coupon"
                            aria-expanded="true">Click here to enter your code</a>
                    </h3>
                    <div id="checkout_coupon" className="collapse checkout_coupon" data-parent="#checkout_coupon">
                        <div className="checkout_info">
                            <form action="#">
                                <input placeholder="Coupon code" type="text" />
                                <button className="theme-btn-one btn btn-black-overlay btn-md" type="submit">Apply
                                    coupon</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopLogin
