import ProductInfo from './ProductInfo'
import RelatedProduct from './RelatedProduct'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Import Img
import img1 from '../../../assets/img/product-image/product1.png'
import img2 from '../../../assets/img/product-image/product2.png'
import img3 from '../../../assets/img/product-image/product3.png'
import img4 from '../../../assets/img/product-image/product4.png'
import img5 from '../../../assets/img/product-image/product5.png'

const ProductDetailsTwo = () => {
    // Quenty Inc Dec
    const [count, setCount] = useState(0)
    const incNum=()=>{
        setCount(count + 1)
    }
    const decNum=()=>{
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert("Sorry, Zero Limit Reached")
            setCount(0)
        }
    }
    let settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 900, 
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            }
       
          },
           {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
           {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
    return (
        <>
             <section id="product_single_two" className="ptb-100">
        <div className="container">
            <div className="row area_boxed">
                <div className="col-lg-4">
                    <div className="product_single_two_img slider-for">
                    <Slider {...settings}>
                        <div className="product_img_two_slider">   
                            <img src={img1} alt="img"/>
                        </div>
                        <div className="product_img_two_slider">   
                            <img src={img2} alt="img"/>
                        </div>
                        <div className="product_img_two_slider">   
                            <img src={img3} alt="img"/>
                        </div>
                        <div className="product_img_two_slider">   
                            <img src={img4} alt="img"/>
                        </div>
                        <div className="product_img_two_slider">   
                            <img src={img5} alt="img"/>
                        </div>
                        </Slider>
                    </div>
                   
                </div>
                <div className="col-lg-8">
                    <div className="product_details_right_one">
                        <div className="modal_product_content_one">
                            <h3>Black fashion handbag JI9023</h3>
                            <div className="reviews_rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span>(2 Customer Review)</span>
                            </div>
                            <h4>$317.76 <del>$456.43</del> </h4>
                            <p>Standard dummy text ever since the 1500s, standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen.
                            </p>
                            <div className="customs_selects">
                                <select name="product" className="customs_sel_box">
                                    <option value="volvo">Size</option>
                                    <option value="saab">XL</option>
                                    <option value="mercedes">S</option>
                                    <option value="audi">M</option>
                                    <option value="audi">L</option>
                                </select>
                            </div>
                            <div className="variable-single-item">
                                <span>Color</span>
                                <div className="product-variable-color">
                                    <label for="modal-product-color-red1">
                                        <input name="modal-product-color" id="modal-product-color-red1"
                                            className="color-select" type="radio" />
                                        <span className="product-color-red"></span>
                                    </label>
                                    <label for="modal-product-color-green3">
                                        <input name="modal-product-color" id="modal-product-color-green3"
                                            className="color-select" type="radio" />
                                        <span className="product-color-green"></span>
                                    </label>

                                    <label for="modal-product-color-blue5">
                                        <input name="modal-product-color" id="modal-product-color-blue5"
                                            className="color-select" type="radio" />
                                        <span className="product-color-blue"></span>
                                    </label>
                                </div>
                            </div>
                            <form action="#!" id="product_count_form_two">
                                <div className="product_count_one">
                                    <div className="plus-minus-input">
                                        <div className="input-group-button">
                                            <button type="button" className="button" onClick={decNum}>
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <input className="form-control" type="number" name="quantity" value={count}/>
                                        <div className="input-group-button">
                                            <button type="button" className="button" onClick={incNum} >
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="links_Product_areas">
                                <ul>
                                    <li>
                                        <Link to="/wishlist" className="action wishlist" title="Wishlist"><i
                                                className="fa fa-heart"></i>Add To Wishlist</Link>
                                    </li>
                                    <li>
                                        <Link to="/compare" className="action compare" title="Compare"><i
                                                className="fa fa-exchange-alt"></i>Add To Compare</Link>
                                    </li>
                                </ul>
                                <Link to="/cart" className="theme-btn-one btn-black-overlay btn_sm">Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductInfo/>
        </div>
    </section>
    <RelatedProduct/>
        </>
    )
}

export default ProductDetailsTwo
