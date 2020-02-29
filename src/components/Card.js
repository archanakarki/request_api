import React from 'react';

const Card = ({title, count})=>{
const style={
    width : '18rem',
    padding : '2% 1%'
}
  return (
    <div class='card' style={style}>
      <div class='card-body'>
        <h2 class='card-title'>{count}</h2>
        <p class='card-text'>
            {title}
        </p>
      </div>
    </div>
  );
}

export default Card;
