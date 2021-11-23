import React from 'react'
import logo from '../../../assets/img/logo.png'
import payment from '../../../assets/img/common/payment.png'
import { Link } from 'react-router-dom'
import Maps from '../../Maps/Maps'
import video1 from '../../../assets/img/product-image/candles.mp4'
const FooterData =[
    {
        title:"INFORMATION",
        links:[
            {linkTitle: "Home", link: "/"},
        ]
    },
]

const Footer = () => {
    return (
        <>
    <footer id="footer_one">
        <div className="container">
            
            <div className="row one-item">
                    <a href="https://www.amazon.com/s?me=AYJYSSPK1VWHC&marketplaceID=ATVPDKIKX0DER"><i className="fa fa-amazon"></i></a>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <video width="400" controls>
                        <source src={video1} type="video/mp4"/>
                        Your browser does not support playing videos.
                    </video>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 google-maps">
                    <Maps/>
                </div> 
            </div>

            <div className="row one-item">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="footer_one_widget" key={1}>
                        <h3>About Us</h3>
                        <p>At BTO STORE, we believe that your home should reflect your personal style. Like your life, every corner of your home should be eye-catching and unique. BTO STORE is a home decor store established to help its customers discover their own style in terms of design. Browse our extensive product collection now to find what you are looking for.</p>
                    </div>
                </div> 
            </div>

        </div>
    </footer>

    <section id="copyright_one">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="copyright_left">
                        <h6>© CopyRight 2021 <span>BTO X Scistone</span></h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Footer
