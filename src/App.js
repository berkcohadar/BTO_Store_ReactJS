import React from 'react';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import ScrollToTop from './component/Common/ScrollToTop';
// All Page Import
import Fashion from '../src/page/Fashion'
import Furniture from '../src/page/Furniture'
import Electronics from '../src/page/Electronics'
import ShopGrid from './page/ShopGrid';
import ShopTwo from '../src/page/ShopTwo';
import ShopList from '../src/page/ShopList';
import ShopLeftSideBar from '../src/page/ShopLeftSideBar';
import ShopRightSideBar from '../src/page/ShopRightSideBar';
import PoductDetails from '../src/page/PoductDetails';
import ProductDetailsTwos from '../src/page/ProductDetailsTwos';
import Cart from '../src/page/Cart';
import CartTwo from '../src/page/CartTwo';
import EmptyCarts from '../src/page/EmptyCart';
import CheckoutOne from '../src/page/Checkout';
import CheckoutTwos from './page/CheckoutTwos';
import WishLists from '../src/page/WishList';
import Compares from '../src/page/Compares';
import About from '../src/page/About';
import OrderComplete from '../src/page/OrderComplete';
import OrderTracking from './page/OrderTracking';
import ProductHover from './page/ProductHover';
import OrderSuccesses from './page/OrderSuccess';
import EmailTemplateOnes from './page/EmailTemplateOne';
import EmailTemplateTwos from './page/EmailTemplateTwo';
import EmailTemplateThrees from './page/EmailTemplateThree';
import InvoiceOne from './page/InvoiceOne';
import InvoiceTwo from './page/InvoiceTwo';
import LookBooks from './page/LookBooks';
import BlogGridThrees from './page/BlogGridThrees';
import BlogGridTwos from './page/BlogGridTwos';
import BlogListView from './page/BlogListView';
import BlogSingleOnes from './page/BlogSingleOnes';
import BlogSingleTwos from './page/BlogSingleTwos';
import Vendor from './page/Vendor';
import AddProducts from './page/AddProducts';
import MyAccounts from './page/MyAccounts';
import AccountEdit from './page/AccountEdit';
import Login from './page/Login';
import Register from './page/Register';
import Error from './page/Error';
import PrivacyPolicy from './page/PrivacyPolicy';
import Faqs from './page/Faqs';
import ComingSoon from './page/ComingSoon';
import ContactOne from './page/ContactOne';
import ContactTwo from './page/ContactTwo';
const App = () =>{
  return (
    <>
                <BrowserRouter>
                <Router>
                        <ScrollToTop>
                        <Switch>
                            <Route path='/' exact component={Fashion}/>
                            <Route path='/furniture' exact component={Furniture}/>
                            <Route path='/electronics' exact component={Electronics}/>
                            <Route path='/shop' exact component={ShopGrid}/>
                            <Route path='/shopTwo' exact component={ShopTwo}/>
                            <Route path='/shoplist' exact component={ShopList}/>
                            <Route path='/shop-left-bar' exact component={ShopLeftSideBar}/>
                            <Route path='/shop-right-bar' exact component={ShopRightSideBar}/>
                            <Route path='/poduct-details-one' exact component={PoductDetails}/>
                            <Route path='/poduct-details-two' exact component={ProductDetailsTwos}/>
                            <Route path='/cart' exact component={Cart}/>
                            <Route path='/cartTwo' exact component={CartTwo}/>
                            <Route path='/empty-cart' exact component={EmptyCarts}/>
                            <Route path='/checkout-one' exact component={CheckoutOne}/>
                            <Route path='/checkout-two' exact component={CheckoutTwos}/>
                            <Route path='/wishlist' exact component={WishLists}/>
                            <Route path='/compare' exact component={Compares}/>
                            <Route path='/order-complete' exact component={OrderComplete}/>
                            <Route path='/order-tracking' exact component={OrderTracking}/>
                            <Route path='/about' exact component={About}/>
                            <Route path='/product-hover' exact component={ProductHover}/>
                            <Route path='/order-success' exact component={OrderSuccesses}/>
                            <Route path='/email-template-one' exact component={EmailTemplateOnes}/>
                            <Route path='/email-template-two' exact component={EmailTemplateTwos}/>
                            <Route path='/email-template-three' exact component={EmailTemplateThrees}/>
                            <Route path='/invoice-one' exact component={InvoiceOne}/>
                            <Route path='/invoice-two' exact component={InvoiceTwo}/>
                            <Route path='/lookbooks' exact component={LookBooks}/>
                            <Route path='/blog-grid-three' exact component={BlogGridThrees}/>
                            <Route path='/blog-grid-two' exact component={BlogGridTwos}/>
                            <Route path='/blog-list-view' exact component={BlogListView}/>
                            <Route path='/blog-single-one' exact component={BlogSingleOnes}/>
                            <Route path='/blog-single-two' exact component={BlogSingleTwos}/>
                            <Route path='/vendor-dashboard' exact component={Vendor}/>
                            <Route path='/add-products' exact component={AddProducts}/>
                            <Route path='/my-account' exact component={MyAccounts}/>
                            <Route path='/account-edit' exact component={AccountEdit}/>
                            <Route path='/login' exact component={Login}/>
                            <Route path='/register' exact component={Register}/>
                            <Route path='/privacy-policy' exact component={PrivacyPolicy}/>
                            <Route path='/faqs' exact component={Faqs}/>
                            <Route path='/coming-soon' exact component={ComingSoon}/>
                            <Route path='/contact-one' exact component={ContactOne}/>
                            <Route path='/contact-two' exact component={ContactTwo}/>
                            <Route exact component={Error}/>
                        </Switch>
                        </ScrollToTop>
                </Router>
            </BrowserRouter>

    </>
  );
}

export default App;
