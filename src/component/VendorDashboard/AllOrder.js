import React from 'react'
import { TableData } from './Data'
const AllOrder = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="vendor_order_boxed">
                        <h4>All Order</h4>
                        <div class="table-responsive">
                            <table class="table pending_table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">Order Id</th>
                                        <th scope="col">Product Details</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TableData.slice(0, 7).map((data, index)=>(
                                         <tr key={index}>
                                         <td>{data.order_id}</td>
                                         <td>{data.product_Name}</td>
                                         <td>{data.status}</td>
                                         <td>{data.price}</td>
                                     </tr>
                                    ))}
                                   
                                </tbody>
                            </table>
                        </div>
                        <div class="btn_right_table">
                            <a href="add-product.html" class="theme-btn-one bg-black btn_sm">Add Product</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllOrder
