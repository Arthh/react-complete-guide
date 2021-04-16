import { Switch, Route, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

import Layout from './components/layout/Layout'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/quotes" />} />
          <Route exact path="/quotes" component={AllQuotes} />
          <Route path="/quotes/:quoteId" component={QuoteDetail} />
          <Route path="/new-quote" component={NewQuote} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
