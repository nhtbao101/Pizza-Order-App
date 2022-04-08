import { useNavigate } from 'react-router';

import { formatPrice } from '../../../utils';

const CartTotal = ({ totalCost }) => {
  const navigate = useNavigate();
  const onCheckout = () => {
    const customerInfo = localStorage.getItem('customerInfo');
    if (!customerInfo) {
      navigate('/customerInfo');
    } else {
      navigate('/payment');
    }
  };

  return (
    <div className="cart-total-price col-lg-4">
      <div className="cart-total">
        <div className="cart-title">TOTAL</div>
        <div className="cart-coupon">{formatPrice(totalCost)}</div>
      </div>
      <div className="btn btn-submit cart-submit" onClick={onCheckout}>
        CHECKOUT
      </div>
    </div>
  );
};

export default CartTotal;
