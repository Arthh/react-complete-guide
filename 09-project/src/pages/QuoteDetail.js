import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'author1', text: 'salve salve familia1'},
  {id: 'q2', author: 'author2', text: 'salve salve familia2'},
  {id: 'q3', author: 'author3', text: 'salve salve familia3'},
  {id: 'q4', author: 'author4', text: 'salve salve familia4'}
]

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if(!quote) {
    return <p> No quote found! </p>
  }

  return (
  <>
    <HighlightedQuote text={quote.text} author={quote.author} />
    <Route path={match.path}exact  >
      <div className="centered">
        <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
      </div>
    </Route>
    <Route path={`${match.path}/comments`}>
      <Comments />
    </Route>
  </>
  );
};

export default QuoteDetail;