import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The Products</h1>
      <ul>
        <li> <Link to="/products/p1">Car 1 </Link></li>
        <li> <Link to="/products/p2">Car 2 </Link></li>
        <li> <Link to="/products/p3">Car 3 </Link></li>
      </ul>
    </section>
  );
  
};

export default Products;