import React from 'react'
import Dashboard from './Dashboard'
import AllProduct from './AllProduct'
import AllOrder from './AllOrder'
import Profile from './Profile'
import Setting from './Setting'
import { Link } from 'react-router-dom'
const VendorDashBoard = () => {
    return (
        <>
        <section id="vendor_area" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-3">

                    <div class="dashboard_tab_button">
                        <ul role="tablist" class="nav flex-column dashboard-list">
                            <li><a href="#vendor_dashboard" data-toggle="tab" class=" active"><i class="fa fa-tachometer"></i>  Dashboard</a></li>
                            <li> <a href="#all_product" data-toggle="tab"><i class="fa fa-shopping-cart"></i>Product</a></li>
                            <li><a href="#all_order" data-toggle="tab"><i class="fa fa-shopping-bag"></i>Order</a></li>
                            <li><a href="#profile_vendor" data-toggle="tab"><i class="fa fa-id-badge"></i>Profile</a></li>
                            <li><Link to="/add-products"><i class="fa fa-cart-plus"></i>Add PRoduct</Link></li>
                            <li><a href="#vendor_setting" data-toggle="tab"><i class="fa fa-user"></i>Setting</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-9">
                    <div class="tab-content dashboard_content">
                        <div class="tab-pane fade show active" id="vendor_dashboard">
                            <Dashboard/>
                        </div>

                        <div class="tab-pane fade" id="all_product">
                            <AllProduct/>
                        </div>

                        <div class="tab-pane fade" id="all_order">
                            <AllOrder/>
                        </div>

                        <div class="tab-pane" id="profile_vendor">
                          <Profile/>
                        </div>

                        <div class="tab-pane fade" id="vendor_setting">
                            <Setting/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default VendorDashBoard
