import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Common/Banner'
import MyAccount from '../component/MyAccountDashboard/MyAccount'
import Footer from '../component/Common/Footer'
const MyAccounts = () => {
    return (
        <>  
            <Header/>
            <Banner title="My Account" />
            <MyAccount/>
            <Footer/>

        </>
    )
}

export default MyAccounts
