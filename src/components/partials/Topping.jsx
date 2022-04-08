import { useDispatch, useSelector } from 'react-redux';
import { toppings } from '../../constants/productData';

import { currentProduct, updatePrice, updateTopping } from '../../stores/product.slice';

import { sizePrice, toppingOption } from '../../utils';

const CheckboxTopping = ({ id }) => {
  const dispatch = useDispatch();
  const product = useSelector(currentProduct);

  const onChangeTopping = (e) => {
    const isChecked = e.target.checked;
    const priceOfSize = sizePrice(product.size);
    if (isChecked) {
      const currentTopping = [...product.toppings, e.target.value];
      const priceOfTopping = toppingOption(currentTopping);
      dispatch(updateTopping([...product.toppings, e.target.value]));
      dispatch(updatePrice(priceOfSize + priceOfTopping));
    } else {
      const removeTopping = product.toppings.filter((top) => top !== e.target.value);
      const priceOfTopping = toppingOption(removeTopping);
      dispatch(updatePrice(priceOfSize + priceOfTopping));
      dispatch(updateTopping(removeTopping));
    }
  };

  return (
    <fieldset className="topping-section">
      <legend className="group-title">Topping</legend>
      <ul className="row checkbox-group">
        {toppings.map((topping, i) => (
          <li className="col-lg-3 radio-item" key={i} onChange={onChangeTopping}>
            <div className="topping-item">
              <input
                id={`${topping.name}-${id}`}
                type="checkbox"
                value={topping.name}
                name={`topping-${id}`}
              />
              <label
                className="btn btn-outline label-name"
                htmlFor={`${topping.name}-${id}`}
              >
                {topping.name}
                <span className="label-price">(${topping.price})</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default CheckboxTopping;
