import React from 'react';

const Person = ({name, children}) => {

  return (
    <div>
      <h2>{name}</h2>
      {children}
    </div>
  )
}

 export default Person;