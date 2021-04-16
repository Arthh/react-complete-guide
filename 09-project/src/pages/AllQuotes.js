import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'author1', text: 'salve salve familia1'},
  {id: 'q2', author: 'author2', text: 'salve salve familia2'},
  {id: 'q3', author: 'author3', text: 'salve salve familia3'},
  {id: 'q4', author: 'author4', text: 'salve salve familia4'}
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  );
};

export default AllQuotes;