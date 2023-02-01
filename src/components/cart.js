import React from "react";
import Check from "./check";
import Modal from "./modal";
import ProductItem from "./product-item";

const Cart = ({ cart, plus, deletProduct, min, totalProduct, open, setOpen, loading, checkOpen, byProduct, closeCheckOpen }) => {
  return (
    <>
      <h1>общая сумма: {totalProduct}som</h1>
      {
        totalProduct !== 0 ?
          <button
            onClick={() => setOpen(true)}
            style={{ marginBottom: '20px' }}>
            оформить зaказ
          </button>
          : null
      }
      {
        open ? <Modal
          loading={loading}
          byProduct={byProduct}
          setOpen={setOpen}
          cart={cart}
          totalProduct={totalProduct} />
          : null
      }
      {
        checkOpen ?
          <Check
            closeCheckOpen={closeCheckOpen}
            totalProduct={totalProduct} />
          : null
      }
      <div className="product">
        {
          cart.map(elem => {
            return <ProductItem
              min={() => min(elem.id)}
              plus={() => plus(elem.id)}
              onClick={() => deletProduct(elem.id)}
              buttonTitle={'delate'}
              key={elem.id}
              {...elem} />
          })
        }
      </div>
    </>
  )
}
export default Cart;