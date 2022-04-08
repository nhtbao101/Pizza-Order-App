import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeCart, updateQuantity } from '../../../stores/cart.slice';

import { formatPrice, getPriceSize, getPriceTopping } from '../../../utils';

const CartDetail = ({ product }) => {
  const dispatch = useDispatch();
  const [quantityTxt, setQuantityTxt] = useState(product.quantity);

  useEffect(() => {
    handleUpdate(product, quantityTxt);
  }, [quantityTxt]);

  const handleQuantityTxt = (e) => {
    setQuantityTxt(+e.target.value);
  };

  const handleQuantity = (increase = true) => {
    if (increase) {
      setQuantityTxt(product.quantity + 1);
    } else {
      if (product.quantity > 1) {
        setQuantityTxt(product.quantity - 1);
      }
    }
  };

  const handleRemove = () => {
    dispatch(removeCart(product));
  };

  const handleUpdate = (product, quantity) => {
    dispatch(updateQuantity({ product, quantity }));
  };

  console.log(product);
  return (
    <div className="cart-detail flex-center-x flex-start-y">
      <div className="cart-body-left flex-center-x">
        <img className="product-img" src={product.image} alt={product.name} />
        <div className="product-info">
          <Link to={`/product/${product.id}`}>
            <h4 className="product-name font-bold">{product.name}</h4>
          </Link>
          <p className="description">{product.description}</p>
          <div className="size-group">
            <span className="font-bold">Size: </span>
            <span>{product.size}&nbsp;</span>
            <span>({getPriceSize(product.size)})</span>
          </div>
          {product.toppings.length > 0 && (
            <div className="topping-group">
              <span className="font-bold">Topping: </span>
              <span>{getPriceTopping(product.toppings)}</span>
            </div>
          )}
        </div>
      </div>
      <div className="cart-body-right flex-between-y">
        <span className="product-total">
          {formatPrice(product.totalPrice * product.quantity)}
        </span>
        <div className="product-amount">
          <span
            className={`amount decrese-amount ${product.quantity > 1 ? '' : 'disable'}`}
            onClick={() => handleQuantity(false)}
          >
            -
          </span>
          <input
            className="amount-now"
            value={quantityTxt}
            onChange={handleQuantityTxt}
          />
          <span className="amount increse-amount" onClick={() => handleQuantity()}>
            +
          </span>
        </div>
        <span className="remove" onClick={handleRemove}>
          Remove
        </span>
      </div>
    </div>
  );
};

export default CartDetail;
