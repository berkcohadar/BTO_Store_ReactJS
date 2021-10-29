import React from 'react'

const Heading = (props) => {
    return (
        <>
             <div class="row">
                <div class="col-lg-12">
                    <div class="center_heading_two">
                        <h2>{props.heading}</h2>
                        <span class="heading_border"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading
