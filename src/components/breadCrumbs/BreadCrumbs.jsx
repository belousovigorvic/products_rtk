import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadCrumbs = ({ cart }) => {
  return (
    <div className="text-blue-500">
      <NavLink to="/">Products/</NavLink>
      {cart && <NavLink to="/products/cart">Cart</NavLink>}
    </div>
  )
}

export default BreadCrumbs
