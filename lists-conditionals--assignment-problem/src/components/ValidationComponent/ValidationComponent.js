import React from 'react';

const validationComponent = (props) => {
  const msgText = props.textLenght >= 5 ? 'Text long enough' : 'Text too short'

  return <p>{msgText}</p>
}

export default validationComponent;