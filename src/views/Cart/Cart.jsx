import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItem, food_list, removeFromCart ,getTotlCartAmmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>

      <div className="cartItem">
        <div className="card-item-title">
          <p>Items</p>
          <p>title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Title</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div className="card-item-title card-item-item">
                  <img src={item.image} alt="" srcset="" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>$ {item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>

            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotlCartAmmount()}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <p>Delivary Free</p>
              <p>{getTotlCartAmmount()==0?0:2}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotlCartAmmount()==0?0:getTotlCartAmmount()+2}</b>
            </div>

          </div>
          <button onClick={()=>navigate('/order')}>PROEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you are a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
