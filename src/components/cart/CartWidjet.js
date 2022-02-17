import React, { useContext } from 'react'
import CartIcon from '../icon/CartIcon'
import { CartContext } from './CartContext'


export const CartWidjet = () => {
  const {items}=useContext(CartContext)
    
  const cantidad=items.map(({quantity})=>(<li>{quantity}</li>))
  return (
    <div>
      <CartIcon/>
      <ul>
      <li>{cantidad}</li>
      </ul>
      </div>
  )
}
