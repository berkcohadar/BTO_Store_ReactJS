import React from 'react'

// Import Img
import search from '../../assets/img/svg/search.svg'


const SideBar = () => {

    return (
        <>
           <div className="col-lg-3">
                    <div className="shop_sidebar_wrapper">
                        <div className="shop_Search">
                            <form action="#!">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <button><img src={search} alt="img" /></button>
                            </form>
                        </div>
                        <div className="shop_sidebar_boxed">
                            <h4>Product Categories</h4>
                            <form action="#!">
                                <label className="custom_boxed">Woman Dresses
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">T-shirts
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">Fashion
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">Bags
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">Jackets
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">Shoes
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">Jeans
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </form>
                        </div>
                        <div className="shop_sidebar_boxed">
                            <h4>Price</h4>
                            <div className="price_filter">
                                <div id="slider-range"
                                    className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                    <div className="ui-slider-range ui-widget-header ui-corner-all"
                                        style={{Left:" 33.6364%", Width: "37.5758%"}}>
                                    </div>
                                    <div className="range_count">
                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
                                        style={{Left:" 33.6364%"}}>
                                    </span>
                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
                                        style={{Left:" 71.2121%"}}>
                                    </span>
                                    </div>
                                </div>
                              
                                <div className="price_slider_amount">
                                    <span>Price :</span>
                                    <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                </div>
                            </div>
                        </div>
                        <div className="shop_sidebar_boxed">
                            <h4>Color</h4>
                            <div className="product-variable-color">
                                <label for="modal-product-color-red6">
                                    <input name="modal-product-color" id="modal-product-color-red6" className="color-select"
                                        type="radio" />
                                    <span className="product-color-red"></span>
                                </label>
                                <label for="modal-product-color-tomato1">
                                    <input name="modal-product-color" id="modal-product-color-tomato1"
                                        className="color-select" type="radio" />
                                    <span className="product-color-tomato"></span>
                                </label>
                                <label for="modal-product-color-green2">
                                    <input name="modal-product-color" id="modal-product-color-green2"
                                        className="color-select" type="radio" />
                                    <span className="product-color-green"></span>
                                </label>
                                <label for="modal-product-color-light-green3">
                                    <input name="modal-product-color" id="modal-product-color-light-green3"
                                        className="color-select" type="radio" />
                                    <span className="product-color-light-green"></span>
                                </label>
                                <label for="modal-product-color-blue4">
                                    <input name="modal-product-color" id="modal-product-color-blue4" className="color-select"
                                        type="radio" />
                                    <span className="product-color-blue"></span>
                                </label>
                                <label for="modal-product-color-light-blue5">
                                    <input name="modal-product-color" id="modal-product-color-light-blue5"
                                        className="color-select" type="radio" />
                                    <span className="product-color-light-blue"></span>
                                </label>
                            </div>
                        </div>
                        <div className="shop_sidebar_boxed">
                            <h4>Size</h4>
                            <form action="#!" id="sizes_input">
                                <label className="custom_boxed">XS
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">S
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">M
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">L
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">XL
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </form>
                        </div>
                        <div className="shop_sidebar_boxed">
                            <h4>Brand</h4>
                            <form action="#!">
                                <label className="custom_boxed">Next
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">Adidas
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">Calvin Klein
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">Nike
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">Geox
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="custom_boxed">River Island
                                    <input type="radio" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <div className="clear_button">
                                    <button className="theme-btn-one btn_sm btn-black-overlay">Clear Filter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
        </>
    )
}

export default SideBar
