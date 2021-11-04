import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import logoWhite from '../../../assets/img/logo-white.png'
import { MenuData } from './MenuData'
import NaveItems from './NaveItems'

// import Img
import img1 from '../../../assets/img/product-image/product1.png'
import img2 from '../../../assets/img/product-image/product2.png'
import img3 from '../../../assets/img/product-image/product3.png'
import img4 from '../../../assets/img/product-image/product4.png'
import svg from '../../../assets/img/svg/cancel.svg'
import svgsearch from '../../../assets/img/svg/search.svg'

// Product Data
const ProductData = [
    {
        img:img1,
        title:"Car Wheel",
        price:"$49.00",
    }, 
    {
        img:img2,
        title:"Car Wheel",
        price:"$49.00",
    },
    {
        img:img3,
        title:"Car Wheel",
        price:"$49.00",
    },
    {
        img:img4,
        title:"Car Wheel",
        price:"$49.00",
    }
]

const Header = () => {
    const [click, setClick] = useState(false);
    const [show, setShow] = useState();

    const handleClick = () => {
        if (click) {
            document.querySelector("#offcanvas-add-cart").style = ("transform: translateX(100%);")
        } else {
            document.querySelector("#offcanvas-add-cart").style = ("transform: translateX(0%);")
        }
        setClick(!click);
    }
    const handleWish = () => {
        if (click) {
            document.querySelector("#offcanvas-wishlish").style = ("transform: translateX(100%);")
        } else {
            document.querySelector("#offcanvas-wishlish").style = ("transform: translateX(0);")
        }
        setClick(!click);
    }

    const handleSearch = () => {
        if (click) {
            document.querySelector("#search").style = ("transform: translate(-100%, 0); opacity: 0")
        } else {
            document.querySelector("#search").style = ("transform: translate(0px, 0px); opacity: 1")
        }
        setClick(!click);
    }
    const handleabout = () => {
        if (click) {
            document.querySelector("#offcanvas-about").style = ("transform: translateX(100%);")
        } else {
            document.querySelector("#offcanvas-about").style = ("transform: translateX(0%);")
        }
        setClick(!click);
    }
    const handlemenu = () => {
        if (click) {
            document.querySelector("#mobile-menu-offcanvas").style = ("transform: translateX(100%);")
        } else {
            document.querySelector("#mobile-menu-offcanvas").style = ("transform: translateX(0%);")
        }
        setClick(!click);
    }

    const handleShow = (value) => {
        value === show ? setShow("") : setShow(value)
    }
    const products = [
        {"title":"Muslim Prayer Rug Thick",
        "price":"22.99",
        "thumbnail":"https://m.media-amazon.com/images/I/91HHS2SCLxL.jpg",
        "media":[],
        "desc":"TB Muslim Prayer Rug Thick, Islamic, Soft Velvet Mat Ramadan Gift, with Prayer Bead Unique Decoration Gilded Gold-Like Embroidered for Women Man Kids Meditation Turkish African (Blue)",
        },
        {"title":"Decoration Floating Citronella Candles",
        "price":"18.99",
        "thumbnail":"https://m.media-amazon.com/images/I/41gGGmW1qQS.jpg",
        "media":[],
        "desc":"",
        },
        {"title":"Decoration Manly Scented Candles Premium",
        "price":"13.99",
        "thumbnail":"https://m.media-amazon.com/images/I/71KRuOk42LL.jpg",
        "media":[],
        "desc":"Tb Decoration Manly Scented Candles Premium Soy Wax Aromatherapy Candles Smoky Clove in Luxury Black Box and Jar Home Decor for Man and Women (Clove & Smoke)",
        },
        {"title":"Muslim Prayer Rug Chenille ",
        "price":"19.99",
        "thumbnail":"https://m.media-amazon.com/images/I/A1VojnQsCnL.jpg",
        "media":[],
        "desc":"",
        },
        {"title":"Decorative Ladybug Sculptures Handmade Wall Art",
        "price":"12.99",
        "thumbnail":"https://m.media-amazon.com/images/I/81J8c0C94fS.jpg",
        "media":[],
        "desc":"TB Decorative Ladybug Sculptures Handmade Wall Art Oriental Design Miraculous for Birthday Gift Outside Baby Room Luck for Kids Women Garden Fence (2)",
        },
        {"title":"Decoration Manly Scented Candles Premium Rose Tattoo",
        "price":"15.99",
        "thumbnail":"https://m.media-amazon.com/images/I/71C18b3ZBoL.jpg",
        "media":[],
        "desc":"Tb Decoration Manly Scented Candles Premium Soy Wax Aromatherapy Candles Smoky Clove in Luxury Black Box and Jar Home Decor for Man and Women (Clove & Smoke)",
        },
        
    ]

    return (
        <>
            <header className="header-section d-none d-xl-block">
                <div className="header-wrapper">
                    <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                    <div className="header-logo">
                                        <div className="logo">
                                            <Link to="/"><img src={logo} alt="logo" /></Link>
                                        </div>
                                    </div>
                                    <ul className="header-action-link action-color--black action-hover-color--golden">
                                        <li>
                                            About
                                        </li>
                                        <li>
                                            <a href="#offcanvas-about" className="offacnvas offside-about offcanvas-toggle" onClick={handleabout}>
                                                <i className="fa fa-bars"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mobile-header sticky-header sticky-color--golden mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-between">

                            <div className="mobile-header-left">
                                <ul className="mobile-menu-logo">
                                    <li>
                                        <a href="index.html">
                                            <div className="logo">
                                                <img src={logo} alt="logo" />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mobile-right-side">
                                <ul className="header-action-link action-color--black action-hover-color--golden">
                                    <li>
                                        <a href="#!" className="search_width" onClick={handleSearch}>
                                            <img src={svgsearch} alt="img" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="offcanvas-toggle" onClick={handleWish}>
                                            <i className="fa fa-heart"></i>
                                            <span className="item-count">3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="offcanvas-toggle" onClick={handleClick}>
                                            <i className="fa fa-shopping-bag"></i>
                                            <span className="item-count">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="offcanvas-toggle offside-menu" onClick={handlemenu}>
                                            <i className="fa fa-bars"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="mobile-menu-offcanvas" className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section">

                <div className="offcanvas-header text-right">
                    <button className="offcanvas-close" onClick={handlemenu}>
                        <img src={svg} alt="icon" />
                    </button>
                </div>
                <div className="offcanvas-mobile-menu-wrapper">
                    <div className="mobile-menu-bottom">
                        <div className="offcanvas-menu">
                            <ul>
                                <li>
                                    <a href="#!" onClick={() => handleShow("home")}><span>Home</span></a>
                                    {
                                        show === "home" ?
                                            <ul className="mobile-sub-menu">
                                                <li><Link to="/">Fashion</Link></li>
                                                <li><Link to="/furniture">Furniture</Link></li>
                                                <li><Link to="/electronics">Electronics</Link></li>
                                            </ul> : null
                                    }

                                </li>
                                <li >
                                    <a href="#!" onClick={() => handleShow("shop")}><span>Shop</span></a>
                                    {
                                        show === "shop" ? <>
                                            <ul className="mobile-sub-menu">
                                                <li>
                                                    <a href="#!">Shop Layout</a>
                                                    <ul className="mobile-sub-menu">
                                                        <li><Link to="/shop">Shop Four Grid</Link></li>
                                                        <li><Link to="/shopTwo">Shop Three Grid</Link></li>
                                                        <li><Link to="/shoplist">Shop List View</Link></li>
                                                        <li><Link to="/shop-left-bar">Shop Left Sidebar</Link></li>
                                                        <li><Link to="/shop-right-bar">Shop Right Sidebar</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>

                                            <ul className="mobile-sub-menu">
                                                <li>
                                                    <a href="#!">Shop Pages</a>
                                                    <ul className="mobile-sub-menu">
                                                        <li><Link to="/cart">Cart View One</Link></li>
                                                        <li><Link to="/cartTwo">Cart View Two </Link></li>
                                                        <li><Link to="/empty-cart">Empty Cart</Link></li>
                                                        <li><Link to="/checkout-one">Checkout View One</Link></li>
                                                        <li><Link to="/checkout-two">Checkout View Two</Link></li>
                                                        <li><Link to="/wishlist">Wishlist</Link></li>
                                                        <li><Link to="/compare">Compare</Link></li>
                                                        <li><Link to="/order-tracking">Order Tracking</Link></li>
                                                        <li><Link to="/order-complete">Order Complete</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <ul className="mobile-sub-menu">
                                                <li>
                                                    <a href="#!">Product Single</a>
                                                    <ul className="mobile-sub-menu">
                                                        <li><Link to="/poduct-details-one">Product Single</Link></li>
                                                        <li><Link to="/poduct-details-two">Product Single Two</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </> : null
                                    }

                                </li>
                                <li>
                                    <a href="#!" onClick={() => handleShow("feature")}><span>Feature</span></a>
                                    {
                                        show === "feature" ?

                                            <ul className="mobile-sub-menu">
                                                <li><Link to="/product-hover">Product Hover</Link></li>
                                                <li><Link to="/order-success">Order Success</Link></li>
                                                <li><Link to="/email-template-one">Email Template 1</Link></li>
                                                <li><Link to="/email-template-two">Email Template 2</Link></li>
                                                <li><Link to="/email-template-three">Email Template 3</Link></li>
                                                <li><Link to="/lookbooks">LookBook</Link></li>
                                                <li><Link to="/invoice-one">Invoice 1</Link></li>
                                                <li><Link to="/invoice-two">Invoice 2</Link></li>
                                            </ul>

                                            : null
                                    }
                                </li>
                                <li>
                                    <a href="#!" onClick={() => handleShow("blogs")}><span>Blogs</span></a>
                                    {
                                        show === "blogs" ?
                                            <ul className="mobile-sub-menu">
                                                <li><Link to="/blog-grid-three">Blog Grid View One</Link></li>
                                                <li><Link to="/blog-grid-two">Blog Grid View Two</Link></li>
                                                <li><Link to="/blog-list-view">Blog List View</Link></li>
                                                <li><Link to="/blog-single-one">Blog Single View One </Link></li>
                                                <li><Link to="/blog-single-two">Blog Single View TWo</Link></li>
                                            </ul>
                                            : null
                                    }

                                </li>
                                <li>
                                    <a href="#!" onClick={() => handleShow("pages")}><span>Pages</span></a>

                                    {
                                        show === "pages" ?
                                            <ul className="mobile-sub-menu">
                                                <li><Link to="/about">About Us</Link></li>
                                                <li><Link to="/vendor-dashboard">Vendor</Link></li>
                                                <li><Link to="/my-account">My Account</Link></li>
                                                <li><Link to="/contact-one">Contact Us One</Link></li>
                                                <li><Link to="/contact-two">Contact Us Two</Link></li>
                                                <li><Link to="/coming-soon">Coming Soon</Link></li>
                                                <li><Link to="/faqs">Frequently Questions</Link></li>
                                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                                <li><Link to="/error">404 Page</Link></li>
                                                <li><Link to="/login">Login</Link></li>
                                            </ul>
                                            : null
                                    }
                                </li>
                            </ul>
                        </div>

                    </div>



                    <div className="mobile-contact-info">
                        <div className="logo">
                            <Link to="/"><img src={logoWhite} alt="img" /></Link>
                        </div>
                        <address className="address">
                            <span>Address: 1001 Enclave Blvd, Edwardsville, IL 62025</span>
                            <span>Call Us: +1-(618)-900-4096</span>
                            <span>Email: support@btostore.com</span>
                        </address>
                        <ul className="social-link">
                            <li>
                                <a href="#!"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>

                        <ul className="user-link">
                            <li><Link to="/wishlist">Wishlist</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/checkout-one">Checkout</Link></li>
                        </ul>
                    </div>

                </div>

            </div>
            <div id="offcanvas-about" className="offcanvas offcanvas-rightside offcanvas-mobile-about-section">
                <div className="offcanvas-header text-right">
                    <button className="offcanvas-close" onClick={handleabout}>
                        <img src={svg} alt="icon" />
                    </button>
                </div>
                <div className="mobile-contact-info">
                    <address className="address">
                        <img src={logoWhite} alt="logo" />
                        <span>Address: 1001 Enclave Blvd, Edwardsville, IL 62025</span>
                        <span>Call Us: +1-(618)-900-4096</span>
                        <span>Email: support@btostore.com</span>
                    </address>
                    <ul className="social-link">
                        <li>
                            <a href="#!"><i className="fa fa-amazon"></i></a>
                        </li>
                        <li>
                            <a href="#!"><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="offcanvas-add-cart" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
                <div className="offcanvas-header text-right">
                    <button className="offcanvas-close" onClick={handleClick}>
                        <img src={svg} alt="icon" />
                    </button>
                </div>
                <div className="offcanvas-add-cart-wrapper">
                    <h4 className="offcanvas-title">Shopping Cart</h4>
                    <ul className="offcanvas-cart">
                    {ProductData.map((data, index)=>(
                            <li className="offcanvas-wishlist-item-single" key={index}>
                            <div className="offcanvas-wishlist-item-block">
                                <a href="#!" className="offcanvas-wishlist-item-image-link" >
                                    <img src={data.img} alt="img"
                                        className="offcanvas-wishlist-image" />
                                </a>
                                <div className="offcanvas-wishlist-item-content">
                                    <a href="#!" className="offcanvas-wishlist-item-link">{data.title}</a>
                                    <div className="offcanvas-wishlist-item-details">
                                        <span className="offcanvas-wishlist-item-details-quantity">1 x
                                        </span>
                                        <span className="offcanvas-wishlist-item-details-price">{data.price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas-wishlist-item-delete text-right">
                                <a href="#!" className="offcanvas-wishlist-item-delete"><i className="fa fa-trash"></i></a>
                            </div>
                        </li>
                        ))}            
                    </ul>
                    <div className="offcanvas-cart-total-price">
                        <span className="offcanvas-cart-total-price-text">Subtotal:</span>
                        <span className="offcanvas-cart-total-price-value">$170.00</span>
                    </div>
                    <ul className="offcanvas-cart-action-button">
                        <li>
                            <Link to="/cart" className="theme-btn-one btn-black-overlay btn_md">View Cart</Link>
                        </li>
                        <li>
                            <Link to="/checkout-one" className="theme-btn-one btn-black-overlay btn_md">Checkout</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="offcanvas-wishlish" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
                <div className="offcanvas-header text-right">
                    <button className="offcanvas-close" onClick={handleWish}>
                        <img src={svg} alt="icon" />
                    </button>
                </div>
                <div className="offcanvas-wishlist-wrapper">
                    <h4 className="offcanvas-title">Wishlist</h4>

                    <ul className="offcanvas-wishlist">
                        {ProductData.slice(0, 2).map((data, index)=>(
                            <li className="offcanvas-wishlist-item-single" key={index}>
                            <div className="offcanvas-wishlist-item-block">
                                <a href="#!" className="offcanvas-wishlist-item-image-link" >
                                    <img src={data.img} alt="img"
                                        className="offcanvas-wishlist-image" />
                                </a>
                                <div className="offcanvas-wishlist-item-content">
                                    <a href="#!" className="offcanvas-wishlist-item-link">{data.title}</a>
                                    <div className="offcanvas-wishlist-item-details">
                                        <span className="offcanvas-wishlist-item-details-quantity">1 x
                                        </span>
                                        <span className="offcanvas-wishlist-item-details-price">{data.price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas-wishlist-item-delete text-right">
                                <a href="#!" className="offcanvas-wishlist-item-delete"><i className="fa fa-trash"></i></a>
                            </div>
                        </li>
                        ))}
                    </ul>
                    <ul className="offcanvas-wishlist-action-button">
                        <li>
                            <Link to="/wishlist" className="theme-btn-one btn-black-overlay btn_md">View wishlist</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="search" className="search-modal">
                <button type="button" className="close" onClick={handleSearch}><img src={svg} alt="icon" /></button>
                <form>
                    <input type="search" placeholder="type keyword(s) here" />
                    <button type="submit" className="btn btn-lg btn-golden">Search</button>
                </form>
            </div>
        </>
    )
}

export default Header