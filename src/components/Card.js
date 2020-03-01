import React from 'react';
import './Card.css'

const Card = ({title, count})=>{
  return (
    <div className='card col-sm-3 col-md-3 col-lg-4 col-lg-4'>
      <div className='card-body'>
        <h2 className='Card-number'>{count}</h2>
        <p className='Card-text'>
            {title}
        </p>
      </div>
    </div>
  );
}

export default Card;
