import React from 'react'
import img1 from '../../../assets/img/main/main_page.JPG'

const Banner = () => {

    const bannerItem =
        {
            id: 0,
            alt: 'Candles',
            description:'At BTO STORE, we believe that your home should reflect your personal style. Like your life, every corner of your home should be eye-catching and unique. ',
            category:"Candles"
        };

    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container" style={{ display: 'block' }}>
                                    <img className="ps-img" src={img1} alt={bannerItem.alt} />
                                    <section><p>Shop Now</p></section>

            </div>
            <div className="ps-alttext">
            <p>{bannerItem.description}</p>
            </div>
        </div>
    );
};
export default Banner;