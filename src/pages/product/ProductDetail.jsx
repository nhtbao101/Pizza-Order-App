import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setCurrentPrd } from '../../stores/product.slice';

import Button from '../../components/partials/Button';
import CheckboxSize from '../../components/partials/Size';
import CheckboxTopping from '../../components/partials/Topping';
import { pizzaList } from '../../constants/productData';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getPrd = pizzaList.filter((prd) => +prd.id === +id)[0];
    const currentPrd = {
      ...getPrd,
      totalPrice: 0,
      quantity: 1,
      size: 'Small',
      toppings: [],
    };
    setProduct(currentPrd);
    dispatch(setCurrentPrd(currentPrd));
  }, [id]);

  return (
    <div>
      {product && (
        <div className="product-detail">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img className="image" src={product.image} alt={product.name} />
              </div>
              <div className="product col-lg-6">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <CheckboxSize id={product.id} />
                <CheckboxTopping id={product.id} />
                <Button dataProduct={product} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
