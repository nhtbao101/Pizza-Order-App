import { sizes, toppings } from '../constants/productData';

export const sizePrice = (typeName) => {
  switch (typeName) {
    case 'Small':
      return 15;
    case 'Medium':
      return 20;
    case 'Large':
      return 25;
  }
};

export const toppingOption = (dataTopping) => {
  const filterTopping = toppings.filter((topping) => dataTopping.includes(topping.name));
  const priceOfTopping = filterTopping.reduce(
    (total, current) => total + current.price,
    0
  );
  return priceOfTopping;
};

export const updateNumberCart = (dataCart) => {
  return dataCart.reduce((total, current) => total + current.quantity, 0);
};

export const caltotalCost = (dataCart) => {
  return dataCart.reduce(
    (total, currentPrd) => total + currentPrd.totalPrice * currentPrd.quantity,
    0
  );
};

export const formatPrice = (price, fixed = 2, currency = '$') => {
  return currency + (+price).toFixed(fixed);
};

export const getPriceTopping = (arrayData) => {
  const dataTopping = toppings.filter((topping) => arrayData.includes(topping.name));
  return dataTopping.map((data) => data.name + ' ($' + data.price + ')').join(', ');
};

export const getPriceSize = (value) => {
  const dataPrice = sizes.find((data) => data.name === value);
  return formatPrice(dataPrice?.price, 0);
};
