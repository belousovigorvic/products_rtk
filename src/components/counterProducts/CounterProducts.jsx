import React from 'react'
import { AiOutlineShoppingCart } from '../../../node_modules/react-icons/ai'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const CounterProducts = () => {
  const cart = useSelector(state => state.products)

  return (
    <NavLink to={'products/cart'}>
      <div className="absolute top-10 right-10 ">
        <div className="relative">
          <AiOutlineShoppingCart size={'40px'} />
          <span className="absolute top-4 text-pink-600 left-8 font-semibold text-3xl">
            {cart.cart.length}
          </span>
        </div>
      </div>
    </NavLink>
  )
}

export default CounterProducts
