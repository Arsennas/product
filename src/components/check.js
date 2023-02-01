import React from 'react';

const Check = (props) => {
  const {closeCheckOpen,totalProduct} = props
  return (
    <div className='check'>
      <h1>успешно оформлено</h1>
      <span>общая сумма: {totalProduct} som</span>
      <button onClick={closeCheckOpen}>закрыть чек</button>
    </div>
  );
};

export default Check;