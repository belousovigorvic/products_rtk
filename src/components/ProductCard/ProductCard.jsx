import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../store/productsSlice'

const ProductCard = ({
  title,
  brand,
  description,
  price,
  rating,
  style,
  handleClick,
  count,
  id,
  btn = false,
  del = false
}) => {
  const dispatch = useDispatch()
  const cou = useSelector(state => state.products.cart)

  const decrement = () => {}
  const inc = () => {
    dispatch(increment(id))
  }

  return (
    <div
      className={`bg-zinc-200 text-center text-zinc-900 rounded-md w-80 shadow-lg flex flex-col justify-between ${style}`}
    >
      <h2 className="text-center font-bold py-2 bg-zinc-300">{title}</h2>
      <div className="p-2 flex flex-col justify-between">
        <p className="text-center font-semibold">brand: {brand}</p>
        <p className="my-4 flex-1 font-extralight">
          description: {description}
        </p>
        <p className="text-green-800 p-2 bg-orange-300 mb-2 text-center w-32 rounded-md font-black text-4xl">
          {price} $
        </p>
        <p className="text-orange-500 text-center bg-zinc-600 w-28 rounded-md">
          rating: {rating}
        </p>
        {btn && (
          <button
            className="border-2 border-zinc-500 rounded-md hover:bg-zinc-500 transition-all w-20 m-auto"
            onClick={handleClick}
          >
            Buy
          </button>
        )}
        {del && (
          <div>
            <div>
              <button
                onClick={decrement}
                className="text-4xl bg-zinc-500 mr-2 p-2"
              >
                -
              </button>
              <button onClick={inc} className="text-4xl bg-zinc-500 p-2">
                +
              </button>
            </div>
            <span>Total: </span>
          </div>
        )}
        <p>Count: {count}</p>
      </div>
    </div>
  )
}

export default ProductCard
