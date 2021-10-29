import React from 'react'
import { Link } from 'react-router-dom'
import DashBoard from './DashBoard'
import Order from './Order'
import Download from './Download'
import Address from './Address'
import AccountDetails from './AccountDetails'
const MyAccount = () => {
    return (
        <>
             <section id="my-account_area" className="ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3">

                    <div className="dashboard_tab_button">
                        <ul role="tablist" className="nav flex-column dashboard-list">
                            <li><a href="#dashboard" data-toggle="tab" className="active"><i
                                        className="fa fa-tachometer"></i>Dashboard</a></li>
                            <li> <a href="#orders" data-toggle="tab"><i
                                        className="fa fa-cart-arrow-down"></i>Orders</a></li>
                            <li><a href="#downloads" data-toggle="tab"><i
                                        className="fa fa-cloud-download"></i>Downloads</a></li>
                            <li><a href="#address" data-toggle="tab"><i
                                        className="fa fa-map-marker"></i>Addresses</a></li>
                            <li><a href="#account-details" data-toggle="tab"><i className="fa fa-user"></i>Account
                                    details</a>
                            </li>
                            <li><Link to="/login"><i className="fa fa-sign-out"></i>logout</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9">

                    <div className="tab-content dashboard_content">
                        <div className="tab-pane fade show active" id="dashboard">
                           <DashBoard/>
                        </div>
                        <div className="tab-pane fade" id="orders">
                           <Order/>
                        </div>
                        <div className="tab-pane fade" id="downloads">
                           <Download/>
                        </div>
                        <div className="tab-pane" id="address">
                            <Address/>
                        </div>
                        <div className="tab-pane fade" id="account-details">
                            <AccountDetails/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default MyAccount
