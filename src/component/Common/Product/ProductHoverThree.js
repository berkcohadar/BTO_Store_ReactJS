import React from 'react'
import {ProductData} from '../../Furniture/Product/ProductData';
import ProductCard from '../../Furniture/Product/ProductCard';
const ProductHoverThree = () => {
    return (
        <>

            <section className="product_hover_Widget ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product_hover_heading padd-bottom">
                                <h2>Product Hover Three</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {ProductData.slice(0, 4).map((data, index) => (
                            <ProductCard mainImg={data.main_img} button={data.button} productTitle={data.product_title} price={data.price} key={index} grid={"grid"} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductHoverThree
