import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { cartItem } from '../../stores/cart.slice';

import { updateNumberCart } from '../../utils';
import Logo from '../../assets/logo.png';
import CartIcon from '../../assets/cart.svg';
import Location from '../../assets/location.jpeg';
import { customerInfo } from '../../stores/customerInfo.slice';

const Header = () => {
  const cart = useSelector(cartItem);
  const numberCart = updateNumberCart(cart);

  const infoOfCustomer = useSelector(customerInfo);

  return (
    <header className="header">
      <div className="container flex-center-x flex-center-y">
        <div className="header-left">
          <Link to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header-right">
          <Link className="address-text" to="/customerInfo">
            <div className="address">
              <img className="icon-location" src={Location} alt="your location" />
              {infoOfCustomer && <span>{infoOfCustomer?.houseNumber}</span>}
            </div>
          </Link>
          <div className="option-item cart" data-cart={numberCart}>
            <Link to="/cart">
              <img className="cart-icon" src={CartIcon} alt="cart-icon" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
