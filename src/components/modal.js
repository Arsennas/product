import React, { useState } from 'react';

const Modal = (props) => {
  const { cart, totalProduct ,setOpen,byProduct,loading} = props;

  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [radio,setRadio] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setAddress('')
    setPhone('')
    setUsername('')
    const object = {
      username,
      address,
      phone,
      radio
    }
    byProduct()
    console.log(object,cart.map(elem => elem))
  }
  return (
    <div className='modal'>
      <h1>оформление</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder='ФИО' />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder='ваш адрес' />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder='телефон' />
        <div className='form-control'>
          <div className='form-radio'>
            <label htmlFor="">с давтавкой</label>
            <input value={"с давтавкой"} onChange={(e) => setRadio(e.target.value)} name='radio' type="radio" />
          </div>
          <div className='form-radio'>
            <label htmlFor="">самовызов</label>
            <input value={"самовызов"} onChange={(e) => setRadio(e.target.value)} name='radio' type="radio" />
          </div>
        </div>
        <div className='product-list'>
          {
            cart.map((elem, index) => {
              return <div key={elem.id} className='list'>
                <span>{index + 1}</span>
                <span>названия товара: {elem.title}</span>
                <span>{elem.count} шт</span>
              </div>
            })
          }
        </div>
        <h3>общая сумма: {totalProduct} som</h3>
        <button type='submit'>{loading ? 'загрузка' : 'оформить'}</button>
      </form>
      <button onClick={() => setOpen(false)}>отмена</button>
    </div>
  );
};

export default Modal;