import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import { NUMBER_PATTERN, POSTAL_CODE_PATTERN } from '../../constants/formValidate';

import { Input } from '../../components/partials/Input';
import { updateCustomerInfo } from '../../stores/customerInfo.slice';

const CustomerInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    localStorage.setItem('customerInfo', JSON.stringify(data));
    dispatch(updateCustomerInfo(data));
    navigate(-1);
  };

  return (
    <div className="customer-info">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            name="name"
            placeholder="Name"
            errors={errors}
            {...register('name', { required: 'Name is required' })}
          />
          <Input
            label="Phone number"
            name="phone"
            placeholder="Phone number"
            errors={errors}
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: NUMBER_PATTERN,
                message: 'Phone number is invalid',
              },
            })}
          />
          <Input
            label="Postal code"
            name="postalCode"
            placeholder="Postal Code"
            errors={errors}
            {...register('postalCode', {
              required: 'Postal code is required',
              pattern: {
                value: POSTAL_CODE_PATTERN,
                message: 'Postal code is invalid',
              },
              validate: (value) =>
                value.replace(/-/g, '')?.length === 7 || 'Postal code is invalid',
            })}
          />
          <Input
            label="House number"
            name="houseNumber"
            placeholder="House number"
            errors={errors}
            {...register('houseNumber', {
              required: 'House number is required',
            })}
          />
          <div className="button-submit mt-2">
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerInfo;
