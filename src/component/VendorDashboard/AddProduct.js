import React from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {

    return (
        <>
    <section id="add_product_area" className="ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="add_product_wrapper">
                        <div className="back_to_area">
                            <Link to="/vendor-dashboard"><i class="fa fa-arrow-left"></i> Back To Dashboard</Link>
                        </div>
                        <h3>Add Product</h3>
                        <form action="#!" className="add_product_form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="image-input">
                                        <img src={null} className="image-preview"
                                            alt="img" />
                                        <input type="file" accept="image/*" id="imageInput" />
                                        <label htmlFor="imageInput" className="image-button">
                                            <i className="fa fa-image"></i>Choose image</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fotm-group">
                                        <label  htmlFor="product_name">Product Name*</label>
                                        <input type="text" id="product_name" className="form-control"
                                            placeholder="T-Shirt Form Girls" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fotm-group">
                                        <label  htmlFor="product_price">Product Price*</label>
                                        <input type="number" id="product_price" className="form-control" placeholder="2" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fotm-group">
                                        <label  htmlFor="product_unit">Product Unit*</label>
                                        <select name="product" id="product_unit">
                                            <option value="Filter">Filter</option>
                                            <option value="volvo">Most Popular</option>
                                            <option value="saab">Best Seller</option>
                                            <option value="mercedes">Tranding</option>
                                            <option value="audi">Featured</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fotm-group">
                                        <label  htmlFor="product_available">Product Available From*</label>
                                        <input type="date" id="product_available" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fotm-group">
                                        <label  htmlFor="estimate_available">Estimate Available For Days*</label>
                                        <input type="number" id="estimate_available" className="form-control"
                                            placeholder="12" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fotm-group">
                                        <label  htmlFor="available_stock">Available Stock (Quantity)*</label>
                                        <input type="number" id="available_stock" className="form-control" placeholder="45" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fotm-group">
                                        <label  htmlFor="whole_sale">Whole Sale Support*</label>
                                        <select name="product" id="whole_sale">
                                            <option value="yes" selected>Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fotm-group">
                                        <label  htmlFor="flash_sale">Flash Sale Support*</label>
                                        <select name="product" id="flash_sale">
                                            <option value="yes" selected>Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fotm-group">
                                        <label  htmlFor="frequency_support">Frequency Support*</label>
                                        <select name="product" id="frequency_support">
                                            <option value="yes" selected>Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="btn_right_table">
                                        <button className="theme-btn-one bg-black btn_sm">Add Product</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default AddProduct
