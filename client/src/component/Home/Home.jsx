import { Fragment, useEffect } from 'react';
import { FaMouse } from 'react-icons/fa';
import './Home.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

import ProductCard from './ProductCard';
import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader/Loader';
import { getProduct } from '../../actions/productAction';
import Video from './Video';
import Caption from './Caption';

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) return alert.error(error);
        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="ECOMMERCE" />
                    <div className="banner">
                        <p>Welcome to HeadPhone Store</p>
                        <Caption />

                        <a href="#container">
                            <button className="btn">
                                Scroll <FaMouse />
                            </button>
                        </a>
                        <Video />
                    </div>

                    <h2 className="homeHeading">Featured Products</h2>

                    <div className="container" id="container">
                        {products && products.map((product, index) => <ProductCard key={index} product={product} />)}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;
