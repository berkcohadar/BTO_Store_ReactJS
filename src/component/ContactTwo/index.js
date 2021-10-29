import React from 'react'

const ContactTwoArea = () => {
    return (
        <>
            <section id="contact_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact_form_one">
                                <h3>Get In Touch</h3>
                                <form action="#!">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="number" className="form-control" placeholder="Phone*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea rows="7" className="form-control" placeholder="Message*"></textarea>
                                            </div>
                                            <div className="submit_bitton_contact_one">
                                                <button className="theme-btn-one btn-black-overlay btn_md">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="left_side_contact">
                                <ul>
                                    <li className="address_location">
                                        <i className="fa fa-map-marker"></i>
                                        <p>32, Choto Mirzapur, Ahsan Ahmed Road Khulna 9100, Bangladesh</p>
                                    </li>
                                    <li className="address_location">
                                        <i className="fa fa-phone"></i>
                                        <div className="contact_widget">
                                            <a href="#!">+1 (833) 287-3077</a>
                                            <a href="#!">+1 (833) 528-8619</a>
                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <i className="fa fa-envelope"></i>
                                        <div className="contact_widget">
                                            <a href="#!">demo@gmail.com</a>
                                            <a href="#!">demo@gmail.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactTwoArea
