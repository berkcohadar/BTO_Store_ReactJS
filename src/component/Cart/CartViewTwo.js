import React ,{ useState} from 'react'
import TotalCart from './TotalCart'
import { Link } from 'react-router-dom'

const CartViewTwo = () => {
    
    const [count, setCount] = useState(0)
    const incNum=()=>{
        setCount(count + 1)
    }
    const decNum=()=>{
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert("Sorry, Zero Limit Reached")
            setCount(0)
        }
    }
    return (
        <>
            <section id="cart_area_two" class="ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="table_desc">
                                <div class="table_page table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="product_thumb">Image</th>
                                                <th class="product_name">Product</th>
                                                <th class="product-price">Price</th>
                                                <th class="product_quantity">Quantity</th>
                                                <th class="product_total">Total</th>
                                                <th class="product_remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="product_thumb">
                                                    <Link to="/poduct-details-one">
                                                        <img src={null} alt="img" />
                                                    </Link>
                                                </td>
                                                <td class="product_name">
                                                    <Link to="/poduct-details-one">Handbag fringilla</Link>
                                                </td>
                                                <td class="product-price">$65.00</td>
                                                <td class="product_quantity">
                                                    <div class="plus-minus-input">
                                                        <div class="input-group-button">
                                                            <button type="button" class="button" onClick={decNum}>
                                                                <i class="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                        <input class="form-control" type="number" value={count} />
                                                        <div class="input-group-button">
                                                            <button type="button" class="button" onClick={incNum}>
                                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="product_total">$130.00</td>
                                                <td class="product_remove"><a href="#!"><i class="fa fa-trash"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="cart_submit">
                                    <button class="theme-btn-one btn-black-overlay btn_sm" type="submit">update cart</button>
                                </div>
                            </div>
                            <div class="coupon_inner_two">
                                <input class="mb-2" placeholder="Coupon code" type="text" />
                                <button type="submit" class="theme-btn-one btn-black-overlay btn_sm">Apply coupon</button>
                            </div>
                        </div>
                       <TotalCart fullGrid={"fullGrid"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartViewTwo
