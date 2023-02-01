import React from 'react';
import ProductItem from './product-item';

const Product = (props) => {
  const { product, addToCart } = props;
  return (
    <div className='product'>
      {
        product.map((elem) => {
          return <ProductItem
            buttonTitle={'by'}
            onClick={() => addToCart(elem.id)}
            key={elem.id}
            {...elem} />
        })
      }
    </div>
  )
}
export default Product;