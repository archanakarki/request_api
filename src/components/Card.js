import React from 'react';

const Card = ({title, count})=>{
const style={
    width : '18rem',
    padding : '2% 1%',
    float : 'left'
}
  return (
    <div className='card' style={style}>
      <div className='card-body'>
        <h2 className='card-title'>{count}</h2>
        <p className='card-text'>
            {title}
        </p>
      </div>
    </div>
  );
}

export default Card;
