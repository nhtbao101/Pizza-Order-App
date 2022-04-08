import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { cartItem } from '../../stores/cart.slice';
import CartEmpty from '../../assets/cartEmpty.png';
import { caltotalCost } from '../../utils';

import CartDetail from './components/CartDetail';
import CartTotal from './components/CartTotal';

const Cart = () => {
  const prdCart = useSelector(cartItem);
  const totalCost = caltotalCost(prdCart);

  return (
    <section className="cart-section">
      <div className="container">
        {prdCart.length ? (
          <>
            <div className="section-header">Cart</div>
            <div className="section-body flex-center-x">
              <ul className="cart-body-left list-group cart-list col-lg-8">
                {prdCart &&
                  prdCart.map((prd, i) => (
                    <li className="cart-item" key={i}>
                      <CartDetail product={prd} />
                    </li>
                  ))}
              </ul>
              <CartTotal totalCost={totalCost} />
            </div>
          </>
        ) : (
          <div className="section-body">
            <div className="cart-empty flex-center-x">
              <img className="img-empty" src={CartEmpty} alt="cart empty" />
              <Link to="/">
                <div className="link-empty">Back to shopping</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
