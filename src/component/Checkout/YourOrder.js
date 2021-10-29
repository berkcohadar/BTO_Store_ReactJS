import React from 'react'

const YourOrder = () => {
    return (
        <>
            <div className="col-lg-6 col-md-6">
                    <h3>Your order</h3>
                    <div className="order_table table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Handbag fringilla <strong> × 2</strong></td>
                                    <td> $165.00</td>
                                </tr>
                                <tr>
                                    <td> Handbag justo <strong> × 2</strong></td>
                                    <td> $50.00</td>
                                </tr>
                                <tr>
                                    <td> Handbag elit <strong> × 2</strong></td>
                                    <td> $50.00</td>
                                </tr>
                                <tr>
                                    <td> Handbag Rutrum <strong> × 1</strong></td>
                                    <td> $50.00</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Cart Subtotal</th>
                                    <td>$215.00</td>
                                </tr>
                                <tr>
                                    <th>Shipping</th>
                                    <td><strong>$5.00</strong></td>
                                </tr>
                                <tr className="order_total">
                                    <th>Order Total</th>
                                    <td><strong>$220.00</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="payment_method">
                        <div className="panel-default">
                            <label className="checkbox-default" for="currencyCod" data-toggle="collapse"
                                data-target="#methodCod">
                                <input type="checkbox" id="currencyCod" />
                                <span>Cash on Delivery</span>
                            </label>

                            <div id="methodCod" className="collapse" data-parent="#methodCod">
                                <div className="card-body1">
                                    <p>Please send a check to Store Name, Store Street, Store Town,
                                        Store State
                                        / County, Store Postcode.</p>
                                </div>
                            </div>
                        </div>
                        <div className="panel-default">
                            <label className="checkbox-default" for="currencyPaypal" data-toggle="collapse"
                                data-target="#methodPaypal">
                                <input type="checkbox" id="currencyPaypal" />
                                <span>PayPal</span>
                            </label>
                            <div id="methodPaypal" className="collapse " data-parent="#methodPaypal">
                                <div className="card-body1">
                                    <p>Pay via PayPal; you can pay with your credit card if you don’t
                                        have a
                                        PayPal account.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order_button pt-3">
                            <button className="theme-btn-one btn-black-overlay btn_sm" type="submit">Proceed to PayPal</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default YourOrder
