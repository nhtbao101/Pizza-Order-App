import { Link } from 'react-router-dom';

const Product = (props) => {
  const product = props.item;

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img className="product-image" src={product.image} alt={product.name} />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="description">{product.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
