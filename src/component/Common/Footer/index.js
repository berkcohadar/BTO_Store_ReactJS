import React from 'react'
import logo from '../../../assets/img/logo.png'
import payment from '../../../assets/img/common/payment.png'
import { Link } from 'react-router-dom'
import Maps from '../../Maps/Maps'

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
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="footer_left_side">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <div className="footer_left_side_icon">
                            <ul>
                                <li>
                                    <a href="#!"><i className="fa fa-amazon"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    {FooterData.slice(0, 1).map((data, index)=>(
                        <div className="footer_one_widget" key={index}>
                        <h3>{data.title}</h3>
                        <p>At BTO STORE, we believe that your home should reflect your personal style. Like your life, every corner of your home should be eye-catching and unique. BTO STORE is a home decor store established to help its customers discover their own style in terms of design. Browse our extensive product collection now to find what you are looking for.</p>
                    </div>
                    ))}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 google-maps">
                    <Maps/>
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
