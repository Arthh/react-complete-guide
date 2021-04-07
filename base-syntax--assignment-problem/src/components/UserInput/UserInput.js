import React from 'react';
import './UserInput.css'

const userInput = (props) => {
  const style = {
    borderRadius: '10px',
    border: '1px solid black',
    width: 'auto',
    textAlign: 'center'
  }

  return  <input className='userInput'
    onChange={props.change}
    value={props.actualName}
    type="text" 
    style={style}
    />
}

export default userInput;