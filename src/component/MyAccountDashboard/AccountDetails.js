import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/img/team/team1.png'
const AccountDetails = () => {
    return (
        <>
            <div className="myaccount-content">
                <h4 className="title">Account details</h4>
                <div className="login_form_container">
                    <div className="account_details_form">
                        <form action="#">
                            <div className="img_profiles">
                                <img src={img1} alt="img" />
                            </div>
                            <div className="input-radio">
                                <span className="custom-radio">
                                    <input type="radio" value="1" name="mr" checked /> Mr.</span>
                            </div>
                            <div className="default-form-box mb-20">
                                <label>First Name</label>
                                <input type="text" name="first-name" className="form-control" value="Kazi"
                                    readonly />
                            </div>
                            <div className="default-form-box mb-20">
                                <label>Last Name</label>
                                <input type="text" name="last-name" className="form-control" value="Saiful"
                                    readonly />
                            </div>
                            <div className="default-form-box mb-20">
                                <label>Email</label>
                                <input type="text" name="email-name" value="demo123@gmail.com"
                                    className="form-control" readonly />
                            </div>
                            <div className="default-form-box mb-20">
                                <label>Password</label>
                                <input type="password" name="user-password" value="123456789"
                                    className="form-control" readonly />
                            </div>
                            <div className="default-form-box mb-20">
                                <label>Birthdate</label>
                                <input type="date" name="birthday" value="2017-06-01"
                                    className="form-control" readonly />
                            </div>
                            <span className="example">
                                (E.g.: 05/31/1970)
                            </span>
                            <br />
                            <label className="checkbox-default" for="offer">
                                <input type="checkbox" id="offer" />
                                <span>Receive offers from our partners</span>
                            </label>
                            <br />
                            <label className="checkbox-default checkbox-default-more-text" for="newsletter">
                                <input type="checkbox" id="newsletter" />
                                <span>Sign up for our newsletter<br /><em>You may unsubscribe at any
                                    moment. For that purpose, please find our contact info in the
                                    legal notice.</em></span>
                            </label>
                            <div className="save_button mt-3">
                                <Link to="/account-edit" className="theme-btn-one bg-black btn_sm">Update</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetails
