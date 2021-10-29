import React from 'react'
import TopLogin from './TopLogin'
import YourOrder from './YourOrder'
const CheckOutTwo = () => {
    return (
        <>
            <section id="checkout_two" className="ptb-100">
        <div className="container">
            <div className="row">
                <TopLogin/>
                <div className="col-lg-12">
                    <div className="checkout_area_two">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="checkout_form_area">

                                    <h3>Billing Details</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="default-form-box">
                                                    <label>First Name <span>*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="default-form-box">
                                                    <label>Last Name <span>*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label>Company Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label for="country">country <span>*</span></label>
                                                    <select className="country_option nice-select wide form-control"
                                                        name="country" id="country">
                                                        <option value="2">Bangladesh</option>
                                                        <option value="3">Algeria</option>
                                                        <option value="4">Afghanistan</option>
                                                        <option value="5">Ghana</option>
                                                        <option value="6">Albania</option>
                                                        <option value="7">Bahrain</option>
                                                        <option value="8">Colombia</option>
                                                        <option value="9">Dominican Republic</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label>Street address <span>*</span></label>
                                                    <input placeholder="House number and street name" type="text"
                                                        className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <input placeholder="Apartment, suite, unit etc. (optional)"
                                                        type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label>Town / City <span>*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box">
                                                    <label>State / County <span>*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="default-form-box">
                                                    <label>Phone<span>*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="default-form-box">
                                                    <label> Email Address <span>*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="order-notes">
                                                    <label for="order_note">Order Notes</label>
                                                    <textarea id="order_note"
                                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                                        className="form-control" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <YourOrder/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </>
    )
}

export default CheckOutTwo
