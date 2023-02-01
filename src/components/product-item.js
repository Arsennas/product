import React from 'react';

const ProductItem = (props) => {
  const { title, short_title, price, discount, buttonTitle, count, plus, min, onClick } = props;
  return (
    <div>
      <div className='card'>
        {discount !== null ? <span>скидка {discount}%</span> : null}
        <h5>{title}</h5>
        {count ?
          <span>{price * count}som</span>
          : <span>{price} som</span>}
        <p>{short_title}</p>
        {
          count && <div>
            <button onClick={plus}>plus</button>
            <button>{count}</button>
            <button onClick={min}>min</button>
          </div>
        }
        <button onClick={onClick}>{buttonTitle}</button>
      </div>
    </div>
  )
}
export default ProductItem;