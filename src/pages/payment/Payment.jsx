import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import valid from 'card-validator';

import { Input } from '../../components/partials/Input';
import { clearCart } from '../../stores/cart.slice';

const Payment = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.removeItem('cart');
    dispatch(clearCart());
    alert('Order Success');
    navigate('/');
  };

  return (
    <section className="payment-section">
      <div className="container">
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
