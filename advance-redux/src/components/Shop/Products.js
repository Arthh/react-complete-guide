import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Book 1',
    description: 'book 1 do bobão'
  },
  {
    id: 'p2',
    price: 7,
    title: 'Book 2',
    description: 'book 2 do bobão'
  },
  {
    id: 'p3',
    price: 8,
    title: 'Book 3',
    description: 'book 3 do bobão'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            title={product.title}
            id={product.id}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
