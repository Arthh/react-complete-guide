import { Route } from 'react-router-dom';

import Product from './pages/Products';
import Welcome from './pages/Welcome';
import ProductDetail from './pages/ProductDetail';

import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Route path="/welcome"> <Welcome /> </Route>
        <Route path="/products"> <Product /> </Route>
        <Route path="/product-detail/:productId"> <ProductDetail /> </Route>
      </main>
    </div>
  );
}

export default App;
