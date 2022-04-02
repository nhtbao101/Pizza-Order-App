import CustomerInfo from '../pages/customerInfo';
import Product from '../pages/item';
import Payment from '../pages/payment';

const routers = [
  {
    path: '/',
    element: <Product />,
  },
  {
    path: '/customerInfo',
    element: <CustomerInfo />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
];

export default routers;
