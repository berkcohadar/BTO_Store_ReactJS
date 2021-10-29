import React from 'react'
import { Link } from 'react-router-dom'
const TotalCart = (props) => {
    return (
        <>
         {props.fullGrid ? (
              <div className="col-lg-12 col-md-12">
              <div className="coupon_code right">
                  <h3>Cart Total</h3>
                  <div className="coupon_inner">
                      <div className="cart_subtotal">
                          <p>Subtotal</p>
                          <p className="cart_amount">$215.00</p>
                      </div>
                      <div className="cart_subtotal ">
                          <p>Shipping</p>
                          <p className="cart_amount"><span>Flat Rate:</span> $255.00</p>
                      </div>
                      <a href="#!">Calculate shipping</a>

                      <div className="cart_subtotal">
                          <p>Total</p>
                          <p className="cart_amount">$215.00</p>
                      </div>
                      <div className="checkout_btn">

                          <Link to="/checkout-one" className="theme-btn-one btn-black-overlay btn_sm">
                              Proceed to Checkout
                          </Link>
                      </div>
                  </div>
              </div>
          </div>  
         ):(
              <div className="col-lg-6 col-md-6">
              <div className="coupon_code right">
                  <h3>Cart Total</h3>
                  <div className="coupon_inner">
                      <div className="cart_subtotal">
                          <p>Subtotal</p>
                          <p className="cart_amount">$215.00</p>
                      </div>
                      <div className="cart_subtotal ">
                          <p>Shipping</p>
                          <p className="cart_amount"><span>Flat Rate:</span> $255.00</p>
                      </div>
                      <a href="#!">Calculate shipping</a>

                      <div className="cart_subtotal">
                          <p>Total</p>
                          <p className="cart_amount">$215.00</p>
                      </div>
                      <div className="checkout_btn">

                          <Link to="/checkout-one" className="theme-btn-one btn-black-overlay btn_sm">
                              Proceed to Checkout
                          </Link>
                      </div>
                  </div>
              </div>
          </div>  
         )}
        </>
    )
}

export default TotalCart
