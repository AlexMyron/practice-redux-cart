import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'This is my first book ever!',
  },
  {
    id: 'p2',
    price: 10,
    title: 'My Second Book',
    description: 'This is my second book. ',
  },
  {
    id: 'p3',
    price: 12,
    title: 'My Third Book',
    description: 'This is my third book. ',
  },
];
const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(({ id, title, price, description }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
