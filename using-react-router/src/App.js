import { Route, Switch, Redirect } from 'react-router-dom';

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
        <Switch>
        <Route exact path="/"> <Redirect to="/welcome" /> </Route>
        <Route path="/welcome"> <Welcome /> </Route>
        <Route exact path="/products"> <Product /> </Route>
        <Route exact path="/products/:productId"> <ProductDetail /> </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
