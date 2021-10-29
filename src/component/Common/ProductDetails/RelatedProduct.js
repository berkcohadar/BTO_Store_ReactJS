import React from 'react'
import ProductCard from '../Product/ProductCard'
import { ProductData } from '../Product/ProductData'
import Heading from '../../Fashion/Heading'
const RelatedProduct = () => {
    return (
        <>
            <section id="related_product" className="pb-100">
                <div className="container">
                    <Heading heading="You Might Also Like" para="Mauris luctus nisi sapien tristique dignissim ornare" />
                    <div className="row">
                        {ProductData.slice(0, 4).map((data, index) => (
                            <ProductCard mainImg={data.main_img} hoverImg={data.hover_img} class={data.class}
                                topTital={data.top_tital} button={data.button} productTitle={data.product_title} price={data.price} key={index} grid={"grid"} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default RelatedProduct
