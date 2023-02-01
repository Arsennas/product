import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className='container'>
        <div className='content'>
          <h1 onClick={() => navigate('/')}>Product name :{props.title}</h1>
          <h1 onClick={props.dubClick}>Акции</h1>
          <h1 onClick={() => navigate('/cart')}>Корзина</h1>
          <div className='menu'>
            <ul>
              <li>home</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;