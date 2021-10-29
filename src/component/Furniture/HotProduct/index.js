import React from 'react'
import {ProductData} from '../../Furniture/Product/ProductData';
import ProductCard from '../../Furniture/Product/ProductCard';
import { ImCross } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';

const HotProduct = () => {
    return (
        <>
        <section id="hot_Product_area" className="ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tabs_center_button">
                        <ul className="nav nav-tabs">
                            <li><a data-toggle="tab" href="#new_arrival" className="active">New Arrival</a></li>
                            <li><a data-toggle="tab" href="#trending">Trending</a></li>
                            <li><a data-toggle="tab" href="#best_sellers">Best Sellers</a></li>
                            <li><a data-toggle="tab" href="#featured">Featured</a></li>
                            <li><a data-toggle="tab" href="#on_sall">On sall</a></li>
                          </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tabs_el_wrapper">
                        <div className="tab-content">
                          <div id="new_arrival" className="tab-pane fade show in active">
                              <div className="row">
                                {ProductData.slice(0, 8).map((data, index) =>(
                                    <ProductCard mainImg={data.main_img} button={data.button} productTitle={data.product_title} price={data.price} key={index} grid={"grid"}/>
                                ))}
                              </div>
                          </div>
                          <div id="trending" className="tab-pane fade">
                          <div className="row"> 
                                {ProductData.slice(0, 5).map((data, index) =>(
                                      <ProductCard mainImg={data.main_img} button={data.button} productTitle={data.product_title} price={data.price} key={index} grid={"grid"}/>
                                ))}
                              </div>
                          </div>
                          <div id="best_sellers" className="tab-pane fade">
                          <div className="row">
                                {ProductData.slice(3, 5).map((data, index) =>(
                                    <ProductCard mainImg={data.main_img} button={data.button} productTitle={data.product_title} price={data.price} key={index} grid={"grid"}/>
                                ))}
                              </div>
                          </div>
                          <div id="featured" className="tab-pane fade">
                          <div className="row">
                                {ProductData.slice(5, 11).map((data, index) =>(
                                     <ProductCard mainImg={data.main_img} button={data.button} productTitle={data.product_title} price={data.price} key={index} grid={"grid"}/>
                                ))}
                              </div>
                          </div>
                          <div id="on_sall" className="tab-pane fade">
                          <div className="row">
                                {ProductData.slice(6, 13).map((data, index) =>(
                                      <ProductCard mainImg={data.main_img} button={data.button} productTitle={data.product_title} price={data.price} key={index} grid={"grid"}/>
                                ))}
                              </div>
                          </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </section>


    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="product_one_modal_top modal-content">
                <button type="button" className="close close_modal_icon" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><ImCross/></span>
                </button>
                <div className="modal-body" id="product_slider_one">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className="products_modal_sliders">
                                <img src="assets/img/product-image/product1.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                            <div className="modal_product_content_one">
                                <h3>Black fashion handbag JI9023</h3>
                                <div className="reviews_rating">
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <span>(2 Customer Review)</span>
                                </div>
                                <h4>$317.76</h4>
                                <p>
                                    Standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen.
                                </p>
                                <div className="variable-single-item">
                                    <span>Color</span>
                                    <div className="product-variable-color">
                                        <label htmlFor="modal-product-color-red1">
                                            <input name="modal-product-color" id="modal-product-color-red1"
                                                className="color-select" type="radio" defaultChecked />
                                            <span className="product-color-red"></span>
                                        </label>
                                        <label htmlFor="modal-product-color-green3">
                                            <input name="modal-product-color" id="modal-product-color-green3"
                                                className="color-select" type="radio" />
                                            <span className="product-color-green"></span>
                                        </label>

                                        <label htmlFor="modal-product-color-blue5">
                                            <input name="modal-product-color" id="modal-product-color-blue5"
                                                className="color-select" type="radio" />
                                            <span className="product-color-blue"></span>
                                        </label>
                                    </div>
                                </div>
                                <form action="#!" id="product_count_form_one">
                                    <div className="product_count_one">
                                        <div className="plus-minus-input">
                                            <div className="input-group-button">
                                                <button type="button" className="button" data-quantity="minus"
                                                    data-field="quantity">
                                                   <BiMinus/>
                                                </button>
                                            </div>
                                            <input className="form-control" type="number" name="quantity" value="0" />
                                            <div className="input-group-button">
                                                <button type="button" className="button" data-quantity="plus"
                                                    data-field="quantity">
                                                  <BiPlus/>
                                                </button>
                                            </div>
                                        </div>
                                        <a href="cart.html" className="theme-btn-one btn-black-overlay btn_sm">Add To Cart</a>
                                        <a href="cart.html" className="theme-btn-one btn-black-overlay btn_sm">View Details</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default HotProduct
