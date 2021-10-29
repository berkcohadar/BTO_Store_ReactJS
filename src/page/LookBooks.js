import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Common/Banner'
import LookBook from '../component/LookBook'
import InstgramSlider from '../component/Common/Instagram'
import Footer from '../component/Common/Footer'
const LookBooks = () => {
    return (
        <>
            <Header/>
            <Banner title="Lookbook" />
            <LookBook/>
            <InstgramSlider  />
            <Footer/>
        </>
    )
}

export default LookBooks
