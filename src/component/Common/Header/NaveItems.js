import React from 'react'
import { Link } from 'react-router-dom';

// import Img
import banner from '../../../assets/img/common/nav_banner.png'

const NaveItems = (props) => {
    return (
        <>
            {props.item.mega_menu ? (
                <li className="has-dropdown has-megaitem">
                    <Link to={props.item.href}>{props.item.name} <i className="fa fa-angle-down"></i></Link>
                    <div className="mega-menu">
                        <ul className="mega-menu-inner">
                            {props.item.children.map((item, index) => (
                                <li className="mega-menu-item" key={index}>
                                    <p className="mega-menu-item-title">{item.name}</p>
                                    <ul className="mega-menu-sub">
                                        {item.children.map((datas, index) => (
                                            <li key={index}><Link to={datas.href}>{datas.name}</Link></li>
                                        ))}

                                    </ul>
                                </li>

                            ))}
                            <li className="mega-menu-item">
                                <div className="menu-banner">
                                    <Link to="#!" className="menu-banner-link">
                                        <img className="menu-banner-img" src={banner} alt="img" />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            ) : (
                <li className="has-dropdown">
                    <Link to="#!" className="main-menu-link">{props.item.name} <i className="fa fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        {props.item.children.map((data, index) => (
                            <li>
                                <Link to={data.href} key={index}>{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
                
            )}

        </>
    )
}

export default NaveItems
