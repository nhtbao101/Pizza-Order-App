import ProductList from '../pages/product/ProductList';
import ProductDetail from '../pages/product/ProductDetail';
import Payment from '../pages/payment/Payment';
import Cart from '../pages/cart/index';
import CustomerInfo from '../pages/customerInfo';

const routers = [
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/customerInfo',
    element: <CustomerInfo />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
];

export default routers;
