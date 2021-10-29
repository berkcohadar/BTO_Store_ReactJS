import React from 'react'
import ProductCard from './ProductCard'
import { ProductData } from './ProductData'
const ProductHoverOne = () => {
    return (
        <>
            <section className="product_hover_Widget ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product_hover_heading">
                                <h2>Product Hover One</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {ProductData.slice(6, 10).map((data, index) => (
                            <ProductCard mainImg={data.main_img} hoverImg={data.hover_img} class={data.class}
                                topTital={data.top_tital} button={data.button} productTitle={data.product_title} price={data.price} key={index} id={data.id} grid={"grid"} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductHoverOne
