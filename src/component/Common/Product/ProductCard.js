import React, {useState} from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineExpand } from 'react-icons/ai'; 
import { FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import MyVerticallyCenteredModal from '../../Common/Modal';
import { Router } from 'react-router';
const ProductCard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const handleAmazonRedirect = (link) => {
        Router.push(link)
    }
    return (
        <>   {props.grid ? (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" >
                <div className="product_wrappers_one">
                    <div className="thumb">
                        <Link to={{ pathname: props.amazonLink }}  target="_blank"  className="image">
                           <img src={props.mainImg} alt="Product" />
                            <img className="hover-image" src={props.hoverImg}
                                alt="Product" />
                        </Link>
                        <span className="badges">
                            <span className={props.class}>{props.topTital}</span>
                        </span>
                        {/* <div className="actions">
                            <Link to="/wishlist" className="action wishlist" title="Wishlist"><AiOutlineHeart /></Link>
                            <Link to="#!" className="action quickview" title="Quick view" onClick={() => setModalShow(true)}><AiOutlineExpand /></Link>
                            <Link to="/compare" className="action compare" title="Compare"><FaExchangeAlt /></Link>
                        </div> */}
                        {console.log(props)}
                        <Link to={{ pathname: props.amazonLink }} target="_blank" className="add-to-cart offcanvas-toggle">{props.button}</Link>
                    </div>
                    <div className="content">
                        <h5 className="title">
                            <Link to={{ pathname: props.amazonLink }} target="_blank" >{props.productTitle}</Link>
                        </h5>
                        <span className="price">
                            <span className="new">{props.price}</span>
                        </span>
                    </div>
                </div>
            </div>
        ) : (
            <div className="product_wrappers_one">
                <div className="thumb">
                     <Link to="/poduct-details-one"  className="image">
                           <img src={props.mainImg} alt="Product" />
                            <img className="hover-image" src={props.hoverImg}
                                alt="Product" />
                        </Link>
                    <span className="badges">
                        <span className={props.class}>{props.topTital}</span>
                    </span>
                    <div className="actions">
                            <Link to="/wishlist" className="action wishlist" title="Wishlist"><AiOutlineHeart /></Link>
                            <Link to="#!" className="action quickview" title="Quick view" onClick={() => setModalShow(true)}><AiOutlineExpand /></Link>
                            <Link to="/compare" className="action compare" title="Compare"><FaExchangeAlt /></Link>
                    </div>
                    <Link to="/cart" title="Add To Cart"
                            className="add-to-cart offcanvas-toggle">{props.button}</Link>
                </div>
                <div className="content">
                    <h5 className="title">
                      <Link to="/poduct-details-one">{props.productTitle}</Link>
                    </h5>
                    <span className="price">
                        <span className="new">{props.price}</span> 
                    </span>
                </div>
            </div>
        )}
         <MyVerticallyCenteredModal img={props.mainImg} para={props.para} title={props.productTitle} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )

   
}


export default ProductCard
