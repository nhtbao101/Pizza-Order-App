import { useDispatch, useSelector } from 'react-redux';

import { addTocart } from '../../stores/cart.slice';
import { currentProduct } from '../../stores/product.slice';

const Button = () => {
  const product = useSelector(currentProduct);
  const dispatch = useDispatch();

  return (
    <div className="btn btn-primary" onClick={() => dispatch(addTocart(product))}>
      <div className="group-add-cart">
        <span>ADD TO CART</span>
        <span>TOTAL: ${product?.totalPrice}</span>
      </div>
    </div>
  );
};

export default Button;
