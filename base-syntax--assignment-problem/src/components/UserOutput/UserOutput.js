import React from 'react';

const userOutput = (props) => {
  const style={
    width: '50%',
    border: '1px solid black',
    borderRadius: '8px',
    marginTop: '5px',
    marginBottom: '15px',
    textAlign: 'center'
  }

  return (
    <div style= {style}>
      <p>Username: {props.username}</p>
      <p>Pass: {props.pass}</p>
    </div>
  )
}

export default userOutput;