import React from 'react'
import {ProductData} from '../../Electronics/Product/ProductData';
import ProductCard from '../../Electronics/Product/ProductCard';
const ProductHoverTwo = () => {
    return (
        <>
            <section className="product_hover_Widget ptb-100 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product_hover_heading">
                                <h2>Product Hover Two</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {ProductData.slice(5, 9).map((data, index) => (
                            <ProductCard img={data.main_img} title={data.product_title} price={data.price} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductHoverTwo
