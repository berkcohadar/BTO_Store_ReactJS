import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineExpand } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';

const ListCard = (props) => {
    return (
        <>
            <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                <div className="product_wrappers_list">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="thumb">
                                <a href="product-single.html" className="image">
                                    <img src={props.img} alt="Product" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="content">
                                <div className="product_para_top">
                                    <h4 className="title"><a href="product-single.html">{props.title}</a></h4>
                                    <p>{props.para}</p>
                                    <span className="price">
                                        <span className="new">{props.price}</span>
                                    </span>
                                </div>
                                <div className="actions">
                                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><AiOutlineHeart/></a>
                                    <a href="#!" className="action quickview" data-link-action="quickview"
                                        title="Quick view" data-toggle="modal" data-target="#exampleModalCenter"><AiOutlineExpand/></a>
                                    <a href="compare.html" className="action compare" title="Compare"><FaExchangeAlt/></a>
                                </div>
                                <a href="#offcanvas-add-cart" title="Add To Cart"
                                 className="add-to-cart offcanvas-toggle btn btn_sm theme-btn-one btn-black-overlay">{props.button}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListCard
