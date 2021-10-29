import React from 'react'
import Heading from '../Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {ProductData} from '../Product/ProductData'
import ProductCard from '../Product/ProductCard';

const PopularProduct = () => {

    let settings = {
        arrows: false,
        dots: true,
        margin:30,
        infinite: true,
        speed: 500, 
        slidesToShow: 3,
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
        <section id="furniture_popular_product" className="ptb-100">
        <div className="container">
            <Heading heading={'Popular Product'} />
            <div className="row">
                <div className="col-lg-12">
                    <div className="furniture_popular_slider">
                    
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

export default PopularProduct
