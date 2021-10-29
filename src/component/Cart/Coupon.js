import React from 'react'

const Coupon = () => {
    return (
        <>
            <div className="col-lg-6 col-md-6">
                    <div className="coupon_code left">
                        <h3>Coupon</h3>
                        <div className="coupon_inner">
                            <p>Enter your coupon code if you have one.</p>
                            <input className="mb-2" placeholder="Coupon code" type="text" />
                            <button type="submit" className="theme-btn-one btn-black-overlay btn_sm">Apply coupon</button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Coupon
