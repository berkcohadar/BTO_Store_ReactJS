import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from '../Product/ProductCard'
import {ProductData} from '../Product/ProductData'

const DealProduct = () => {
    let settings = {
        arrows: false,
        dots: false,
        margin:30,
        infinite: true,
        autoplay: true,
        speed: 500, 
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
 
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          }, 
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      };
    return (
        <>
     <section id="elce_weekly_deal" className="ptb-100 slider_arrows_one">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left_heading_three">
                        <h2>Weekly Deal Product</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="elce_weekly_slider">
                    <Slider {...settings}>
                        {ProductData.map((data, index)=>(
                            <ProductCard img={data.main_img} title={data.product_title} price={data.price} key={index} grid="grid"/>
                        ))}
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>   
        </>
    )
}

export default DealProduct
