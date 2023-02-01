import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Nav from './components/nav'
import { category } from './category'
import Product from './components/product';
import productData from './products.json';
import Search from './components/search';
import { Routes, Route } from 'react-router-dom'
import Cart from './components/cart';
import Modal from './components/modal';

const App = () => {
  const [list] = useState(category);
  const [data, setData] = useState(productData);
  const [title, setTitle] = useState('');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart-product")) || []);
  const [open, setOpen] = useState(false)
  const [checkOpen, setCheckOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    localStorage.setItem('cart-product', JSON.stringify(cart))
  }, [cart])
  const toggleTitle = (id, text) => {
    setTitle(text)
    const newArr = productData.filter(elem => elem.category_id === id)
    setData(newArr)
  }
  const searchData = (text) => {
    const newArr = productData.filter(elem => {
      return elem.title.toLowerCase().indexOf(text.toLowerCase()) > -1
    })
    setData(newArr)
  }
  const dubClick = () => {
    const newArr = productData.filter(elem => elem.discount !== null)
    setData(newArr)
  }
  const addToCart = (id) => {
    const check = cart.every(elem => elem.id !== id)
    if (!check) {
      alert('this good already added')
    } else {
      const product = data.find(elem => elem.id === id)
      const newItem = { ...product, count: 1 }
      const newArr = [...cart, newItem]
      setCart(newArr)
    }
  }
  const deletProduct = (id) => {
    const newArr = cart.filter(elem => elem.id !== id)
    setCart(newArr)
  }
  const plus = (id) => {
    const newArr = cart.map(elem => elem.id === id ?
      {
        ...elem,
        count: elem.count + 1,
      } : elem)
    setCart(newArr)
  }
  const min = (id) => {
    const newArr = cart.map(elem => elem.id === id ?
      {
        ...elem,
        count: elem.count === 1 ?
          1 : elem.count - 1
      } : elem)
    setCart(newArr)
  }
  const totalProduct = cart.reduce((acc, item) => acc + item.count * item.price, 0);

  const byProduct = () => {
    setLoading(true)
    setTimeout(() => {
      setOpen(false)
      setCheckOpen(true)
      setLoading(false)
    }, 3000)
  }
  const closeCheckOpen = () => {
    localStorage.removeItem('cart-product')
    setCart([])
    setCheckOpen(false)
  }
  return (
    <div className="App">
      <Header dubClick={dubClick} title={title} />

      <div className='container'>
        <Search searchData={searchData} />
        <div className='wrapper'>
          <div className='left'>
            <Nav
              toggleTitle={toggleTitle}
              category={list} />
          </div>
          <div className='right'>
            <Routes>
              <Route
                path='/'
                element={<Product
                  addToCart={addToCart}
                  product={data} />} />
              <Route
                path='/cart'
                element={<Cart
                  closeCheckOpen={closeCheckOpen}
                  checkOpen={checkOpen}
                  byProduct={byProduct}
                  open={open}
                  setOpen={setOpen}
                  totalProduct={totalProduct}
                  plus={plus}
                  min={min}
                  deletProduct={deletProduct}
                  cart={cart} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
