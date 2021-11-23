import React,{useState} from 'react'
import ProductInfo from './ProductInfo'
import RelatedProduct from './RelatedProduct'
import { Link } from 'react-router-dom'


const ProductDetailsOne = () => {
 
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
    
    return (
        <>
              <section id="product_single_one" className="ptb-100">
        <div className="container">
            <div className="row area_boxed">
                <div className="col-lg-4">
                </div>
                <div className="col-lg-8">
                    <div className="product_details_right_one">
                        <div className="modal_product_content_one">
                            <h3>Blue Dress For Woman</h3>
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
                                when an unknown printer took a galley of type and scrambled it to make a type specimen.Size</p>
                            <div className="customs_selects">
                                <select name="product" className="customs_sel_box">
                                    <option value="volvo">Size</option>
                                    <option value="xl">XL</option>
                                    <option value="small">S</option>
                                    <option value="medium">M</option>
                                    <option value="learz">L</option>
                                </select>
                            </div>
                            <div className="variable-single-item">
                                <span>Color</span>
                                <div className="product-variable-color">
                                    <label for="modal-product-color-red1">
                                        <input name="modal-product-color" id="modal-product-color-red1"
                                            className="color-select" type="radio"  />
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
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input className="form-control" type="number" value={count} />
                                        <div className="input-group-button">
                                            <button type="button" className="button" onClick={incNum}>
                                                <i className="fa fa-plus"></i>
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
                                                className="fa fa-exchange"></i>Add To Compare</Link>
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

export default ProductDetailsOne
