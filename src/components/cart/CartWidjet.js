import React, { useContext } from 'react'
import CartIcon from '../icon/CartIcon'
import { CartContext } from './CartContext'


export const CartWidjet = () => {
  const {items,totalCart}=useContext(CartContext)

  return (
    <div>
      <CartIcon/> {totalCart()}

      </div>
  )
}
