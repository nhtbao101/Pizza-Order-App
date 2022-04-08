import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import valid from 'card-validator';

import { Input } from '../../components/partials/Input';
import { cartItem, clearCart } from '../../stores/cart.slice';
import { customerInfo } from '../../stores/customerInfo.slice';

const Payment = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector(cartItem);
  const infoOfCustomer = useSelector(customerInfo);

  console.log(cart, infoOfCustomer);
  const onSubmit = (data) => {
    if (cart.length === 0) {
      alert('Cart is empty, please buy something!');
      navigate('/');
    } else if (!infoOfCustomer) {
      navigate('/customerInfo');
    } else {
      localStorage.removeItem('cart');
      dispatch(clearCart());
      alert('Order Success! Pizza will be delivered to you in 5 minutes');
      navigate('/');
    }
  };

  return (
    <section className="payment-section">
      <div className="container">
        <h1 className="page-title">Payment info</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="box">
            <Input
              name="card-number"
              label="Credit card number"
              className="input-col"
              placeholder="•••• •••• •••• ••••"
              errors={errors}
              onBlur={() => {
                setValue('cardNumber', 1);
              }}
              {...register('cardNumber', {
                required: 'Card number is required',
                validate: (value) => {
                  return valid.number(value).isValid || 'Card number is required';
                },
              })}
            />
            <Input
              name="expiration-day"
              label="Expiration day"
              className="input-col"
              placeholder="MM/YY"
              errors={errors}
              {...register('expirationDay', {
                required: 'Expiration day is required',
                validate: (value) => {
                  return valid.expirationDate(value).isValid || 'Card number is required';
                },
              })}
            />
            <Input
              name="security-code"
              label="Security code"
              className="input-col"
              placeholder="•••"
              errors={errors}
              {...register('securityCode', {
                required: 'Security code day is required',
                validate: (value) => {
                  console.log('valid.cvv', valid.cvv(value));
                  return valid.cvv(value).isValid || 'Card number is required';
                },
              })}
            />
          </div>
          <div className="button-submit">
            <button type="submit" className="btn  btn-primary btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Payment;
