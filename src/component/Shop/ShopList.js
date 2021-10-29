import React from 'react'
import Filter from './Filter'
import ListCard from './ListCard'
import { ProductData } from '../Common/Product/ProductData'

const ShopList = () => {
    return (
        <>
            <section id="shop_main_area" className="ptb-100">
                <div className="container">
                    <Filter />
                    <div className="row">
                        {ProductData.slice(1, 6).map((data, index)=>(
                            <ListCard img={data.main_img} para={data.para} title={data.product_title} price={data.price} button={data.button} key={index} />
                        ))}
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#!" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#!" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopList
