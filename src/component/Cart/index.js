import React from 'react'
import Coupon from './Coupon'
import TotalCart from './TotalCart'
import { CartData } from './CartData'
import { Link } from 'react-router-dom'
const CartArea = () => {
    return (
        <>
          <section id="cart_area_one" className="ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="table_desc">
                        <div className="table_page table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="product_remove">Remove</th>
                                        <th className="product_thumb">Image</th>
                                        <th className="product_name">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product_quantity">Quantity</th>
                                        <th className="product_total">Total</th>
                                    </tr>
                                </thead>  
                                <tbody>
                                    {CartData.map((data, index)=>(
                                        <tr>
                                        <td className="product_remove" key={index}>
                                            <Link to="/poduct-details-one">
                                                <i className={data.icon_Name}></i>
                                            </Link>
                                        </td>
                                        <td className="product_thumb">
                                        <Link to="/poduct-details-one">
                                                <img src={data.img} alt="img" />
                                         </Link>
                                        </td>
                                        <td className="product_name">
                                        <Link to="/poduct-details-one">
                                            {data.title}
                                        </Link>
                                        </td>
                                        <td className="product-price">{data.price}</td>
                                        <td className="product_quantity">
                                            <label>{data.Quantity}</label>
                                            <input min="1" max="100" value="1" type="number" />
                                        </td>
                                        <td className="product_total">{data.total}</td>
                                    </tr> 
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="cart_submit">
                            <button className="theme-btn-one btn-black-overlay btn_sm" type="submit">update cart</button>
                        </div>
                    </div>
                </div>
                <Coupon/>
                <TotalCart/>
            </div>
        </div>
    </section>  
        </>
    )
}

export default CartArea
