import React from 'react';

const charComponent = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    cursor: 'pointer'
  }

  const charsArray = props.text.split('');

  return (
    <div >
      { charsArray && charsArray.map((char, index) => {
        console.log(index)
        return (
          <p 
          key={index}
          style={style}
          onClick={(event) => props.click(index)}>{char}</p> 
        )
      }) }
    </div>
  )

}

export default charComponent;