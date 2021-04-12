import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import classes from './AddUser.module.css';


const AddUser = (props) => {
  const formRef = useRef();

  const [error, setError] = useState();


  const addUserHandler = (event) => {
    event.preventDefault();
    const username = formRef.current.username.value;
    const age = formRef.current.age.value;

    if(username.trim().length === 0 || age.trim() === 0) 
      return setError({title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values).'});

    // o + funciona como um Number();
    if(+age < 1) 
    return setError({title: 'Invalid age', message: 'Please enter a valid age (> 0 ).'});

    props.onAddUser(username, age);
    formRef.current.username.value = '';
    formRef.current.age.value = '';

  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
     {error && <ErrorModal title={error.title} 
                message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} ref={formRef}>
          <label htmlFor="username" >Username</label>
          <input id="username" type="text" 
          />
          <label htmlFor="age" >Age (Years)</label>
          <input id="age" type="number" 
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;