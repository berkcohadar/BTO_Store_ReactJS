import React from 'react'
import { TableData } from './Data'
const AllProduct = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="vendor_order_boxed">
                        <h4>All Products</h4>
                        <div class="table-responsive">
                            <table class="table pending_table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Sales</th>
                                        <th scope="col">Edit/Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TableData.map((data, index)=>(
                                        <tr key={index}>
                                        <td><img src={data.img} alt="img" /></td>
                                        <td>{data.product_Name}</td>
                                        <td>{data.category}</td>
                                        <td>{data.price}</td>
                                        <td>{data.stock}</td>
                                        <td>{data.sales}</td>
                                        <td><button><i class="fa fa-edit"></i></button> <button><i class="fa fa-trash"></i></button></td>
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

export default AllProduct
