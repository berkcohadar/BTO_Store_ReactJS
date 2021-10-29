import React from 'react'
// import img
import img1 from '../../assets/img/common/img-about.jpg'


const AboutTop = () => {
    return (
        <>
             <section id="about-top" className="ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about_top_img">
                        <img src={img1} alt="img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about_top_left_content">
                        <h2>ABOUT OUR Andshop STORE</h2>
                        <h4>We believe that every project existing in digital world is a result of an idea and every
                            idea has a cause.</h4>
                        <p>For this reason, our each design serves an idea. Our strength in design is reflected by our
                            name, our care for details.
                            Our specialist won't be afraid to go extra miles just to approach near perfection. We don't
                            require everything to be perfect,
                            but we need them to be perfectly cared for. </p>
                        <p>That's a reason why we are willing to give contributions at best.Not a single detail is
                            missed out under Billey's
                            professional eyes. The amount of dedication and effort equals to the level of passion and
                            determination.
                            Get better, together as one. Proin eget tortor risus. Praesent sapien massa, convallis a
                            pellentesque nec,
                            egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default AboutTop
