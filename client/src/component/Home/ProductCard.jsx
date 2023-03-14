import { Link } from 'react-router-dom';
import ReactStar from 'react-rating-stars-component';

const ProductCard = ({ product }) => {
    const options = {
        edit: false,
        value: product.ratings,
        size: window.innerWidth < 600 ? 20 : 25,
        precision: 0.5,
        isHalf: true,
        color: 'rgba(20, 20, 20, 0.1)',
        activeColor: 'tomato',
    };
    return (
        <Link className="productCard" to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStar {...options} />
                <span>({product.numOfReviews} reviews)</span>
            </div>
            <span>{`$${product.price}`}</span>
        </Link>
    );
};

export default ProductCard;
