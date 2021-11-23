import React from 'react'


const LookBook = () => {
    return (
        <>
        <section id="lookbook_area" className="lookbook pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="lookbook-block">
                <div className="img-width">
                    <img src={null} className="img-fluid bg-img" alt="img" />
                </div>
                <div className="lookbook-dot"><span>1</span>
                    <a href="#!">
                        <div className="dot-showbox">
                            <img src={null} className="img-fluid blur-up lazyload" alt="img" />
                            <div className="dot-info">
                                <h5 className="title">tee</h5>
                                <h5>200$</h5>
                                <h6>details</h6>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="lookbook-dot dot2"><span>2</span>
                    <a href="#!">
                        <div className="dot-showbox"><img src={null}
                                className="img-fluid blur-up lazyload " alt="img" />
                            <div className="dot-info">
                                <h5 className="title">tee</h5>
                                <h5>200$</h5>
                                <h6>details</h6>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            </div>
            <div className="col-lg-6">
              <div className="lookbook-block">
                <div className="img-width">
                    <img src={null} className="img-fluid bg-img" alt="img" />
                </div>
                <div className="lookbook-dot dot3"><span>1</span>
                    <a href="#!">
                        <div className="dot-showbox"><img src={null}
                                className="img-fluid blur-up lazyload" alt="img" />
                            <div className="dot-info">
                                <h5 className="title">tee</h5>
                                <h5>200$</h5>
                                <h6>details</h6>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="lookbook-dot dot4"><span>2</span>
                    <a href="#!">
                        <div className="dot-showbox"><img src={null}
                                className="img-fluid blur-up lazyload " alt="img" />
                            <div className="dot-info">
                                <h5 className="title">tee</h5>
                                <h5>200$</h5>
                                <h6>details</h6>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default LookBook
