import React from 'react'

const RegisterArea = () => {
    return (
        <>
            <section id="login_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="account_form">
                                <h3>Register</h3>
                                <form action="#">
                                    <div className="default-form-box">
                                        <label>Username <span>*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="default-form-box">
                                        <label>Email <span>*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="default-form-box">
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="login_submit">
                                        <button className="theme-btn-one btn-black-overlay btn_md" type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterArea
