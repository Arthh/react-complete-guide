import React from 'react';

import classes from  "./Card.module.css";
// import { Container } from './styles';

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  ); 
};

export default Card;