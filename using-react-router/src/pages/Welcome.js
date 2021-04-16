import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome</h1>
      <Route path="/welcome/new-user">
        <h1>New User</h1>
      </Route>
    </section>
  );
};

export default Welcome;