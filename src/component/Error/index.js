import React from 'react'
import { Link } from 'react-router-dom'
const ErrorArea = () => {
    return (
        <>
            <section id="error_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="erorr_wrapper">
                                <h1>404</h1>
                                <h3>We are sorry, the page you've requested is not available</h3>
                                <form action="#!">
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                        <button><i className="fa fa-search"></i></button>
                                    </div>
                                </form>
                                <Link to="/" className="theme-btn-one btn-black-overlay btn_md">Back To Home Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorArea
