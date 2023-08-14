import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../store/productsSlice'

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
  del = false,
  activeCount = false
}) => {
  const dispatch = useDispatch()

  const total = useSelector(state => state.products.cart)

  const dec = () => {
    dispatch(decrement(id))
  }

  const inc = () => {
    dispatch(increment(id))
  }

  return (
    <div
      className={`bg-zinc-200 text-center border-2 border-zinc-400 pb-2 text-zinc-900 rounded-md w-80 shadow-lg flex flex-col justify-between ${style}`}
    >
      <h2 className="text-center text-xl text-zinc-900 font-extrabold p-3 bg-zinc-300">
        {title}
      </h2>
      <div className="p-2 flex-1 flex flex-col justify-between">
        <p className="p-2 text-center flex-1 font-semibold">brand: {brand}</p>
        <p className="my-4 p-2 ">description: {description}</p>
        <p className="text-green-600 m-auto p-2 bg-zinc-700 text-center w-32 rounded-md font-black text-4xl">
          {price} $
        </p>
        <p className="text-yellow-400 p-2 m-auto my-4 text-center bg-zinc-600 w-28 rounded-md">
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
              <button onClick={dec} className="text-4xl bg-zinc-500 mr-2 p-2">
                -
              </button>
              <button onClick={inc} className="text-4xl bg-zinc-500 p-2">
                +
              </button>
            </div>
            <span className='text-teal-700 text-xl font-extrabold'>Total: {total[id].total} $</span>
          </div>
        )}
        {activeCount && <p>Count: {count}</p>}
      </div>
    </div>
  )
}

export default ProductCard
