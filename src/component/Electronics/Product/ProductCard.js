import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import MyVerticallyCenteredModal from '../../Common/Modal'
const ProductCard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
        {props.grid ? (
            <div className="product_item_two">
                <div className="product_item_inner">
                    <div className="product_img_wrap">
                        <Link to="/poduct-details-two">
                            <img src={props.img} alt="product_img" />
                        </Link>
                    </div>
                    <div className="product_button">
                        <Link to="/cart"><i className="fa fa-shopping-bag"></i></Link>
                        <Link to="/wishlist"><i className="fa fa-heart"></i></Link>
                        <Link to="#!" className="action quickview" title="Quick view"  onClick={() => setModalShow(true)}><i className="fa fa-eye"></i></Link>
                    </div>
                </div>
                <div className="product_detail">
                    <h5 className="product_title">
                        <Link to="/poduct-details-two">{props.title}</Link>
                    </h5>
                    <p className="item_price">{props.price}</p>
                </div>
            </div>
        ):(
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                 <div className="product_item_two">
                <div className="product_item_inner">
                    <div className="product_img_wrap">
                    <Link to="/poduct-details-two">
                            <img src={props.img} alt="product_img" />
                    </Link>
                    </div>
                    <div className="product_button">
                       <Link to="/cart"><i className="fa fa-shopping-bag"></i></Link>
                        <Link to="/wishlist"><i className="fa fa-heart"></i></Link>
                        <Link to="#!" className="action quickview" title="Quick view"  onClick={() => setModalShow(true)}><i className="fa fa-eye"></i></Link>
                    </div>
                </div>
                <div className="product_detail">
                    <h5 className="product_title">
                        <Link to="/poduct-details-two">{props.title}</Link>
                    </h5>
                    <p className="item_price">{props.price}</p>
                </div>
            </div>
            </div>
        )}
        <MyVerticallyCenteredModal img={props.mainImg} para={props.para} title={props.productTitle} show={modalShow} onHide={() => setModalShow(false)} />

        </>
    )
}

export default ProductCard
