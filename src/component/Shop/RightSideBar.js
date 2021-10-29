import React from 'react'
import SideBar from './SideBar'
import ProductCard from '../Common/Product/ProductCard'
import { ProductData } from '../Common/Product/ProductData'
const RightSideBar = () => {
    return (
        <>
              <section id="shop_main_area" className="ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                    {ProductData.slice(1, 10).map((data, index) => (
                            <ProductCard mainImg={data.main_img} hoverImg={data.hover_img} class={data.class}
                                topTital={data.top_tital} button={data.button}
                                productTitle={data.product_title} price={data.price} key={index} grid="grid" />
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
                <SideBar/>
            </div>

        </div>
    </section>  
        </>
    )
}

export default RightSideBar
