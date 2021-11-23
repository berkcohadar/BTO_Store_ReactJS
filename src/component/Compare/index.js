import React from 'react'
import { Link } from 'react-router-dom'

const Compare = () => {
    return (
        <>
            <section id="compare_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_desc">
                                <div className="table_page table-responsive compare-table">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td className="first-column">Product</td>
                                                <td className="product-image-title">
                                                    <Link to="/poduct-details-one" className="image">
                                                        <img src={null} alt="Compare_Product" />
                                                    </Link>
                                                    <Link to="/shop-left-bar" className="category">Furniture</Link>
                                                    <h5><Link to="/shop-left-bar" className="title">T-Shirt Form Girls</Link></h5>
                                                </td>
                                                <td className="product-image-title">
                                                <Link to="/poduct-details-one" className="image">
                                                    <img src={null} alt="Compare Product" />
                                                </Link>
                                                    <Link to="/shop-left-bar" className="category">Furniture</Link>
                                                    <h5><Link to="/shop-left-bar" className="title">White Black Line Dress</Link></h5>
                                                </td>
                                                <td className="product-image-title">
                                                <Link to="/poduct-details-one" className="image"><img
                                                        src={null}
                                                        alt="Compare Product" /></Link>
                                                    <Link to="/shop-left-bar" className="category">Furniture</Link>
                                                    <h5><Link to="/shop-left-bar" className="title">Blue Dress For Woman</Link>
                                                    </h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Description</td>
                                                <td className="pro-desc">
                                                    <p>Eye glasses are very important for thos whos have some difficult in
                                                        their eye to see every hing clearly and perfectly</p>
                                                </td>
                                                <td className="pro-desc">
                                                    <p>Eye glasses are very important for thos whos have some difficult in
                                                        their eye to see every hing clearly and perfectly</p>
                                                </td>
                                                <td className="pro-desc">
                                                    <p>Eye glasses are very important for thos whos have some difficult in
                                                        their eye to see every hing clearly and perfectly</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Price</td>
                                                <td className="pro-price">$295</td>
                                                <td className="pro-price">$275</td>
                                                <td className="pro-price">$395</td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Color</td>
                                                <td className="pro-color">Black</td>
                                                <td className="pro-color">Black</td>
                                                <td className="pro-color">Black</td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Stock</td>
                                                <td className="pro-stock">In Stock</td>
                                                <td className="pro-stock">In Stock</td>
                                                <td className="pro-stock">In Stock</td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Add to cart</td>
                                                <td className="pro-addtocart"><Link to="/cart"
                                                    className="theme-btn-one btn-black-overlay btn_sm"><span>ADD TO CART</span></Link></td>
                                                <td className="pro-addtocart"><Link to="/cart"
                                                    className="theme-btn-one btn-black-overlay btn_sm"><span>ADD TO   
                                                        CART</span></Link></td>
                                                <td className="pro-addtocart"><Link to="/cart"
                                                    className="theme-btn-one btn-black-overlay btn_sm"><span>ADD TO
                                                        CART</span></Link></td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Delete</td>
                                                <td className="pro-remove"><button><i className="fa fa-trash"></i></button></td>
                                                <td className="pro-remove"><button><i className="fa fa-trash"></i></button></td>
                                                <td className="pro-remove"><button><i className="fa fa-trash"></i></button></td>
                                            </tr>
                                            <tr>
                                                <td className="first-column">Rating</td>
                                                <td className="pro-ratting">
                                                    <div className="product-review">
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-empty"><i className="fa fa-star"></i></span>
                                                    </div>
                                                </td>
                                                <td className="pro-ratting">
                                                    <div className="product-review">
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-empty"><i className="fa fa-star"></i></span>
                                                    </div>
                                                </td>
                                                <td className="pro-ratting">
                                                    <div className="product-review">
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-fill"><i className="fa fa-star"></i></span>
                                                        <span className="review-empty"><i className="fa fa-star"></i></span>
                                                    </div>
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

export default Compare
