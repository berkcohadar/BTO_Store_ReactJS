import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import img1 from '../../../assets/img/product-image/product1.png'
const  MyVerticallyCenteredModal=(props) => {
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
        <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Body>
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="product_one_modal_top modal-content">
                <button type="button" className="close close_modal_icon"  onClick={props.onHide} >
                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
                </button>
                <div id="product_slider_one">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className="products_modal_sliders">
                                <img src={img1} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
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
                                <h4>$317.76</h4>
                                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.
                                </p>
                                <div className="variable-single-item">
                                    <span>Color</span>
                                    <div className="product-variable-color">
                                        <label for="modal-product-color-red">
                                            <input name="modal-product-color" id="modal-product-color-red"
                                                className="color-select" type="radio" />
                                            <span className="product-color-red"></span>
                                        </label>
                                       
                                        <label for="modal-product-color-green">
                                            <input name="modal-product-color" id="modal-product-color-green"
                                                className="color-select" type="radio" />
                                            <span className="product-color-green"></span>
                                        </label>
                                      
                                        <label for="modal-product-color-blue">
                                            <input name="modal-product-color" id="modal-product-color-blue"
                                                className="color-select" type="radio" />
                                            <span className="product-color-blue"></span>
                                        </label>
                                    </div>
                                </div>
                                <form action="#!" id="product_count_form_one">
                                    <div className="product_count_one">
                                        <div className="plus-minus-input">
                                            <div className="input-group-button">
                                                <button type="button" className="button" onClick={decNum}>
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <input className="form-control" type="number" name="quantity" value={count} />
                                            <div className="input-group-button">
                                                <button type="button" className="button" onClick={incNum}>
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <a href="#!" className="theme-btn-one btn-black-overlay btn_sm">Add To Cart</a>
                                    </div>
                                </form>
                                <div className="modal_share_icons_one">
                                    <h4>SHARE THIS PRODUCT</h4>
                                    <div className="posted_icons_one">
                                        <a href="#!"><i className="fa fa-facebook-f"></i></a>
                                        <a href="#!"><i className="fa fa-instagram"></i></a>
                                        <a href="#!"><i className="fa fa-twitter"></i></a>
                                        <a href="#!"><i className="fa fa-linkedin"></i></a>
                                        <a href="#!"><i className="fa fa-google-plus"></i></a>
                                        <a href="#!"><i className="fa fa-pinterest-p"></i></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default  MyVerticallyCenteredModal
