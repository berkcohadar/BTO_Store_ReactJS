import React from 'react'

const Download = () => {
    return (
        <>
            <div className="myaccount-content">
                <h4 className="title">Downloads </h4>
                <div className="table_page table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Downloads</th>
                                <th>Expires</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Shopnovilla - Free Real Estate PSD Template</td>
                                <td>May 10, 2018</td>
                                <td><span className="danger">Expired</span></td>
                                <td><a href="#!" className="view">Click Here To Download Your File</a></td>
                            </tr>
                            <tr>
                                <td>Organic - ecommerce html template</td>
                                <td>Sep 11, 2018</td>
                                <td>Never</td>
                                <td><a href="#!" className="view">Click Here To Download Your File</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Download
