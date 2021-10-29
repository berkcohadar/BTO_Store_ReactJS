import React from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import { TableData } from './Data'

const Dashboard = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="vendor_top_box">
                        <h2>25</h2>
                        <h4>Total Products</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="vendor_top_box">
                        <h2>2552</h2>
                        <h4>Total Sales</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="vendor_top_box">
                        <h2>50</h2>
                        <h4>Order Pending</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="mychart_area">
                        <LineChart />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="mychart_area">
                        <BarChart />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="vendor_order_boxed">
                        <h4>Pending Products</h4>
                        <table class="table pending_table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TableData.slice(1, 5).map((data, index)=>(
                                     <tr key={index}>
                                     <td><img src={data.img} alt="img" /></td>
                                     <td>{data.product_Name}</td>
                                     <td>{data.price}</td>
                                     <td>{data.sales}</td>
                                 </tr>
                                ))}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="vendor_order_boxed">
                        <h4>Recent Orders</h4>
                        <table class="table pending_table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TableData.slice(1, 7).map((data, index)=>(
                                 <tr key={index}>
                                 <td>{data.order_id}</td>
                                 <td>{data.product_Name}</td>
                                 <td>{data.status}</td>
                             </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
