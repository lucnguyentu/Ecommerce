import './App.css';
import WebFont from 'webfontloader';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './component/layout/Header/Header';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails';
import Product from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignUp from './component/User/LoginSignUp';
import store from './store';
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';
import UserOptions from './component/layout/Header/UserOptions';
import Profile from './component/User/Profile';
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Payment from './component/Cart/Payment';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import Dashboard from './component/Admin/Dashboard';
import ProductList from './component/Admin/ProductList';
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UsersList from './component/Admin/UsersList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';
import About from './component/layout/About/About';
import Contact from './component/layout/Contact/Contact';
import NotFound from './component/layout/NotFound/NotFound';

function App() {
    const { isAuthenticated, user } = useSelector((state) => state.user);

    const [stripeApiKey, setStripeApiKey] = useState('');

    async function getStripeApiKey() {
        const { data } = await axios.get('/api/v1/stripeapikey');

        setStripeApiKey(data.stripeApiKey);
    }

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto', 'Droid Sans', 'Chilanka'],
            },
        });

        store.dispatch(loadUser());

        getStripeApiKey();
    }, []);

    window.addEventListener('contextmenu', (e) => e.preventDefault());

    return (
        <Router>
            <Header />
            {isAuthenticated && <UserOptions user={user} />}

            {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                    <Routes>
                        <Route
                            exact
                            path="/process/payment"
                            element={
                                <ProtectedRoute>
                                    <Payment />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Elements>
            )}

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Product />} />
                <Route exact path="/product/:id" element={<ProductDetails />} />
                <Route path="/products/:keyword" element={<Product />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/about" element={<About />} />
                <Route
                    exact
                    path="/account"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/me/update"
                    element={
                        <ProtectedRoute>
                            <UpdateProfile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/password/update"
                    element={
                        <ProtectedRoute>
                            <UpdatePassword />
                        </ProtectedRoute>
                    }
                />
                <Route exact path="/password/forgot" element={<ForgotPassword />} />
                <Route exact path="/password/reset/:token" element={<ResetPassword />} />
                <Route exact path="/login" element={<LoginSignUp />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route
                    exact
                    path="/shipping"
                    element={
                        <ProtectedRoute>
                            <Shipping />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/order/confirm"
                    element={
                        <ProtectedRoute>
                            <ConfirmOrder />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/success"
                    element={
                        <ProtectedRoute>
                            <OrderSuccess />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/orders"
                    element={
                        <ProtectedRoute>
                            <MyOrders />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/order/:id"
                    element={
                        <ProtectedRoute>
                            <OrderDetails />
                        </ProtectedRoute>
                    }
                />

                <Route
                    exact
                    path="/order/:id"
                    element={
                        <ProtectedRoute>
                            <OrderDetails />
                        </ProtectedRoute>
                    }
                />

                {/* ADMIN ROUTE */}
                <Route
                    exact
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute isAdmin={true}>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/admin/products"
                    element={
                        <ProtectedRoute>
                            <ProductList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/admin/product"
                    element={
                        <ProtectedRoute>
                            <NewProduct />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/admin/product/:id"
                    element={
                        <ProtectedRoute>
                            <UpdateProduct />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/admin/orders"
                    element={
                        <ProtectedRoute>
                            <OrderList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/admin/order/:id"
                    element={
                        <ProtectedRoute>
                            <ProcessOrder />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/admin/users"
                    element={
                        <ProtectedRoute>
                            <UsersList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/admin/user/:id"
                    element={
                        <ProtectedRoute>
                            <UpdateUser />
                        </ProtectedRoute>
                    }
                />
                <Route
                    exact
                    path="/admin/reviews"
                    element={
                        <ProtectedRoute>
                            <ProductReviews />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={window.location.pathname === '/process/payment' ? null : <NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

/*
Bug:
    - Validate form sign up: was moved to login when not fill field input file info  -> done
    - refresh to login page when refresh at route have protected route -> done 
    - update some picture or many picture is not working properly -> done
    - save cart and shoppingInfo after logout in that user, to load cart and shopping info at
        login times after
    - improve interface -> progressing
    - fix user each month in Bar chart
    - response
*/
