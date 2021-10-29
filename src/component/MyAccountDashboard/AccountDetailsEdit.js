import React from 'react'
import img1 from '../../assets/img/team/team1.png'
const AccountDetailsEdit = () => {
    return (
        <>
             <section id="account_edit" class="pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="account_thumd">
                        <div class="account_thumb_img">
                            <img src={img1} alt="img" />
                            <div class="fixed_icon"><input type="file" /><i class="fa fa-camera"></i></div>
                        </div>
                        <h4>Robert Downey JR. </h4>
                        <p>UX/UI Designer</p>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="account_setting">
                        <div class="account_setting_heading">
                            <h2>Account Details</h2>
                            <p>Edit your account settings and change your password here.</p>
                        </div>
                        <form action="!#" id="account_info_form">
                            <div class="input-radio">
                                <span class="custom-radio"><input type="radio" value="1" name="id_gender"/> Mr.</span>
                                <span class="custom-radio"><input type="radio" value="1" name="id_gender"/> Mrs.</span>
                            </div>
                            <div class="form-group">
                                <label htmlFor="f_name">Name</label>
                                <input type="text" class="form-control" id="f_name" placeholder="Jhon" required />
                                <input type="text" class="form-control" placeholder="Dhoe" required />
                            </div>
                            <div class="form-group">
                                <label  htmlFor="email_address">Email Address</label>
                                <input type="text" class="form-control" id="email_address"
                                    placeholder="our email address is demo123@gmail.com" required />
                            </div>
                            <div class="form-group">
                                <label  htmlFor="current_password">Current Password</label>
                                <input type="password" class="form-control" id="current_password"
                                    placeholder="Enter your current password" required />
                                <input type="password" class="form-control" id="new_password"
                                    placeholder="Enter your new password" required />
                                <input type="password" class="form-control" id="re_password"
                                    placeholder="Re-type your new password" required />
                            </div>
                            <button type="submit" class="theme-btn-one bg-black btn_sm">Update Information</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default AccountDetailsEdit
