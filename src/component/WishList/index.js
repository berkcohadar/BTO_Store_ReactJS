import React from 'react'
import { Link } from 'react-router-dom'
// import Img
import img from '../../assets/img/product-image/product5.png'

const Wishlist = () => {
    return (
        <>
            <section id="Wishlist_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_desc">
                                <div className="table_page table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product_remove">Remove</th>
                                                <th className="product_thumb">Image</th>
                                                <th className="product_name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product_stock">Stock Status</th>
                                                <th className="product_addcart">Add To Cart</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product_remove">
                                                    <Link to="#!"><i className="fa fa-trash"></i>
                                                    </Link>
                                                </td>
                                                <td className="product_thumb">
                                                    <Link to="/poduct-details-one">
                                                        <img src={img} alt="img" />
                                                    </Link>
                                                </td>
                                                <td className="product_name"><Link to="/poduct-details-one">Handbag fringilla</Link></td>
                                                <td className="product-price">$65.00</td>
                                                <td className="product_stock"><h6>In Stock</h6></td>
                                                <td className="product_addcart">
                                                    <Link to="/cart" className="theme-btn-one btn-black-overlay btn_sm" >Add To Cart</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist
