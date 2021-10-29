import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Common/Banner'
import ProductDetailsTwo from '../component/Common/ProductDetails/ProductDetailsTwo'
import InstgramSlider from '../component/Common/Instagram'
import Footer from '../component/Common/Footer'

const ProductDetailsTwos = () => {
    return (
        <>
            <Header/>
            <Banner title="Product Desils "/>
            <ProductDetailsTwo/>
            <InstgramSlider/>
            <Footer/>
        </>
    )
}

export default ProductDetailsTwos
