import React from 'react'
import Header from '../component/Common/Header'
import VendorDashBoard from '../component/VendorDashboard'
import Banner from '../component/Common/Banner'
import Footer from '../component/Common/Footer'
const Vendor = () => {
    return (
        <>
            <Header/>
            <Banner title="Vandor" />
            <VendorDashBoard/>
            <Footer/>
        </>
    )
}

export default Vendor
