import React from 'react'
import ProductCard from '../../Common/Product/ProductCard';
import { ProductData } from '../../Common/Product/ProductData';
import Heading from '../Heading';

const HotProduct = () => { 
    return (
        <>
    <section id="hot_Product_area" className="ptb-100">
        <div className="container">
            <Heading heading="Our Products" para="Follow us for more.."/>
            <div className="row">
                <div className="col-lg-12">
                    <div className="tabs_el_wrapper">
                        <div className="tab-content">
                          <div id="new_arrival" className="tab-pane fade show in active">
                              <div className="row">
                                {ProductData.slice(0, 8).map((data, index) =>(
                                    <ProductCard mainImg={data.main_img} hoverImg={data.hover_img} class={data.class}
                                    topTital={data.top_tital} button={data.button} productTitle={data.product_title} amazonLink={data.amazonLink} price={data.price} key={index}  id={data.id} grid={"grid"}/>
                                ))}
                              </div>
                          </div>
                          <div id="trending" className="tab-pane fade">
                          <div className="row"> 
                                {ProductData.slice(0, 5).map((data, index) =>(
                                    <ProductCard mainImg={data.main_img} hoverImg={data.hover_img} class={data.class}
                                     topTital={data.top_tital} button={data.button} productTitle={data.product_title} amazonLink={data.amazonLink} price={data.price} key={index} id={data.id} grid={"grid"}/>
                                ))}
                              </div>
                          </div>
                          <div id="best_sellers" className="tab-pane fade">
                          <div className="row">
                                {ProductData.slice(3, 5).map((data, index) =>(
                                    <ProductCard mainImg={data.main_img} hoverImg={data.hover_img} class={data.class}
                                    topTital={data.top_tital} button={data.button} productTitle={data.product_title} amazonLink={data.amazonLink} price={data.price} key={index} id={data.id} grid={"grid"}/>    
                                ))}
                              </div>
                          </div>
                          <div id="featured" className="tab-pane fade">
                          <div className="row">
                                {ProductData.slice(5, 11).map((data, index) =>(
                                     <ProductCard  mainImg={data.main_img} hoverImg={data.hover_img} class={data.class}
                                     topTital={data.top_tital} button={data.button} productTitle={data.product_title} amazonLink={data.amazonLink} price={data.price} key={index} id={data.id} grid={"grid"}/>  
                                ))}
                              </div>
                          </div>
                          <div id="on_sall" className="tab-pane fade">
                          <div className="row">
                                {ProductData.slice(6, 13).map((data, index) =>(
                                     <ProductCard mainImg={data.main_img} hoverImg={data.hover_img} class={data.class}
                                     topTital={data.top_tital} button={data.button} productTitle={data.product_title} amazonLink={data.amazonLink} price={data.price} key={index} id={data.id} grid={"grid"}/>
                                ))}
                              </div>
                          </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </section>
                                
        </>
    )
}

export default HotProduct
