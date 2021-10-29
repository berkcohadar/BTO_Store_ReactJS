import React from 'react'
import logo from '../../../assets/img/logo.png'
import payment from '../../../assets/img/common/payment.png'
import { Link } from 'react-router-dom'

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
                                    <a href="#!"><i className="fa fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i className="fa fa-google"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                    {FooterData.slice(0, 1).map((data, index)=>(
                        <div className="footer_one_widget" key={index}>
                        <h3>{data.title}</h3>
                        <ul>
                            {data.links.map((link, index)=>(
                                 <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                            ))}
                        </ul>
                    </div>
                    ))}
                    
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                {FooterData.slice(1, 2).map((data, index)=>(
                        <div className="footer_one_widget" key={index}>
                        <h3>{data.title}</h3>
                        <ul>
                            {data.links.map((link, index)=>(
                                 <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                            ))}
                        </ul>
                    </div>
                    ))}
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="footer_one_widget">
                        <h3>NEWSLETTER</h3>
                        <div id="mc_embed_signup" className="subscribe-form">
                            <form>
                                <div className="mc-form">
                                    <input className="form-control" type="email" required="" placeholder="Your Mail*" name="EMAIL" value="" />
                                    <div className="clear">
                                        <button className="theme-btn-one btn_md" type="submit" name="subscribe" value=""> Send Mail</button>
                                    </div>
                                </div>
                            </form>
                        </div>
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
                        <h6>© CopyRight 2021 <span>AndShop</span></h6>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="copyright_right">
                        <img src={payment} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Footer
