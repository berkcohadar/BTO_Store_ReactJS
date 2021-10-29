import React from 'react'
import { Link } from 'react-router-dom'
const Address = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="myaccount-content">
                        <h4 className="title">Billing Address</h4>
                        <div className="billing_address">
                            <h5><strong>Alex Porty</strong></h5>
                            <p>
                                1234 Market ##, Suite 900 <br />
                                Lorem Ipsum, ## 12345
                            </p>
                            <p>Mobile: (123) 123-456789</p>
                            <Link to="#/" className="theme-btn-one bg-black btn_sm">Edit
                                Address</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="myaccount-content">
                        <h4 className="title">Shipping Address</h4>
                        <div className="billing_address">
                            <h5><strong>Alex Porty</strong></h5>
                            <p>
                                1234 Market ##, Suite 900 <br />
                                Lorem Ipsum, ## 12345
                            </p>
                            <p>Mobile: (123) 123-456789</p>
                            <Link to="#/" className="theme-btn-one bg-black btn_sm">Edit
                                Address</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
