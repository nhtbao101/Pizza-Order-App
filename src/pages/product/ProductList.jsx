import { pizzaList } from '../../constants/productData';
import Product from './Product';

const ProductList = () => {
  return (
    <section className="product-list">
      <div className="container">
        <ul className="row">
          {pizzaList.map((pizza, i) => (
            <li key={pizza.id} className="col-lg-3">
              <Product item={pizza} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;
