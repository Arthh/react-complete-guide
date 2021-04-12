import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import Wrapper from './components/Helpers/Wrapper';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList([...usersList, {username, age}]);

    // setUsersList((prevUsersList) => {
    //   return [...prevUsersList, {name: username, age: age}];
    // });
  }

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList}/>
    </Wrapper>
  );
}

export default App;
