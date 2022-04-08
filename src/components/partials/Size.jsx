import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sizes } from '../../constants/productData';
import { currentProduct, updatePrice, updateSize } from '../../stores/product.slice';
import { sizePrice, toppingOption } from '../../utils';

const CheckboxSize = ({ id }) => {
  const dispatch = useDispatch();
  const product = useSelector(currentProduct);
  const [cbSize, cbsetSize] = useState('Small');
  const onChangeSize = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      cbsetSize(e.target.value);
    }
  };

  useEffect(() => {
    const priceOfSize = sizePrice(cbSize);
    const priceOfTopping = toppingOption(product.toppings);
    dispatch(updateSize(cbSize));
    dispatch(updatePrice(priceOfSize + priceOfTopping));
  }, [cbSize]);

  return (
    <fieldset className="size-section">
      <legend className="group-title">Size</legend>
      <ul className="radio-group row">
        {sizes.map((size, i) => (
          <li className="col-lg-3 radio-item" key={i} onChange={onChangeSize}>
            <div className="size-item">
              <input
                id={`${size.name}-${id}`}
                type="radio"
                defaultChecked={size.name === cbSize}
                value={size.name}
                name={`size-${id}`}
              />
              <label
                className="btn btn-outline label-name"
                htmlFor={`${size.name}-${id}`}
              >
                {size.name}
                <span className="label-price">(${size.price})</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default CheckboxSize;
