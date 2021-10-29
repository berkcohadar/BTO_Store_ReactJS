import React from 'react'
import {ProductData} from '../../Common/Product/ProductData'
import ProductCard from '../../Common/Product/ProductCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from '../Heading';

const TodayDeal = () => {
    let settings = {
        arrows: false,
        dots: true,
        margin:30,
        infinite: true,
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
    <section id="to_days_area" className="ptb-100 slider_arrows_one">
        <div className="container">
            <Heading heading="ToDay's Deal" para="Mauris luctus nisi sapien tristique dignissim ornare"/>
            <div className="row">
                <div className="col-lg-12">
                    <div className="todays_slider">
                    <Slider {...settings}>
                    {ProductData.slice(6, 13).map((data, index) =>(
                          <ProductCard mainImg={data.main_img} hoverImg={data.hover_img} class={data.class}
                          topTital={data.top_tital} button={data.button} productTitle={data.product_title} price={data.price} key={index}/>    
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

export default TodayDeal
