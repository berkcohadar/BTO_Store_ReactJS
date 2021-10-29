import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import MyVerticallyCenteredModal from '../../Common/Modal';
const ProductCard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            {props.grid ? (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="product_box text-center">
                        <div className="product_img">
                            <Link to="/poduct-details-one">
                                <img src={props.mainImg} alt="furniture_img1" />
                            </Link>
                            <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                    <li><Link to="/wishlist" className="popup-ajax"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link to="#!" onClick={() => setModalShow(true)} className="action quickview" title="Quick view"> <i className="fa fa-expand"></i></Link></li>
                                    <li><Link to="/compare"><i className="fa fa-exchange"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product_info">
                            <h5 className="product_title"><Link to="/poduct-details-one">{props.productTitle}</Link></h5>
                            <div className="product_price">
                                <span className="price">{props.price}</span>
                                <del>{props.price}</del>
                            </div>
                            <div className="rating_wrap">
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <span className="rating_num">(21)</span>
                            </div>
                            <div className="add-to-cart">
                                <Link to="/cart" title="Add To Cart" className="offcanvas-toggle theme-btn-one bg-black btn_sm">
                                    <i className="fa fa-cart-arrow-down"></i>{props.button}</Link>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (

                <div className="product_box text-center">
                    <div className="product_img">
                        <Link to="/poduct-details-one">
                            <img src={props.mainImg} alt="furniture_img1" />
                        </Link>
                        <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                    <li><Link to="/wishlist" className="popup-ajax"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link to="#!" onClick={() => setModalShow(true)} className="action quickview" title="Quick view"> <i className="fa fa-expand"></i></Link></li>
                                    <li><Link to="/compare"><i className="fa fa-exchange"></i></Link></li>
                                </ul>
                        </div>
                    </div>
                    <div className="product_info">
                        <h5 className="product_title"><Link to="/poduct-details-one">{props.productTitle}</Link></h5>
                        <div className="product_price">
                            <span className="price">{props.price}</span>
                            <del>{props.price}</del>
                        </div>
                        <div className="rating_wrap">
                            <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                            </div>
                            <span className="rating_num">(21)</span>
                        </div>
                        <div className="add-to-cart">
                            <Link to="/cart" title="Add To Cart" className="offcanvas-toggle theme-btn-one bg-black btn_sm">
                                <i className="fa fa-cart-arrow-down"></i>{props.button}</Link>
                        </div>
                    </div>
                </div>
                )}   
              <MyVerticallyCenteredModal img={props.mainImg} para={props.para} title={props.productTitle} show={modalShow} onHide={() => setModalShow(false)} />

        </>
    )
}

export default ProductCard
