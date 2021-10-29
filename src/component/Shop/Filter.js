import React from 'react'
import { Link } from 'react-router-dom'
const Filter = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="product_filter">
                        <div className="customs_selects">
                            <select name="product" className="customs_sel_box">
                                <option value="Filter">Filter</option>
                                <option value="volvo">Most Popular</option>
                                <option value="saab">Best Seller</option>
                                <option value="mercedes">Tranding</option>
                                <option value="audi">Featured</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="product_shot">
                        <div className="product_shot_title">
                            <p> Sort By:</p>
                        </div>
                        <div className="customs_selects">
                            <select name="product" className="customs_sel_box">
                                <option value="Popularity">Sort by Popularity</option>
                                <option value="newness">Sort by newness</option>
                                <option value="low">price: low to high</option>
                                <option value="high">price: high to low</option>
                            </select>
                        </div>
                        <div className="product_shot_view">
                            <ul>
                                <li><Link to="/shopList"><i className="fa fa-list"></i></Link></li>
                                <li><Link to="/shopTwo"><i className="fa fa-th-large"></i></Link></li>
                                <li><Link to="/shop"><i className="fa fa-th"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter
