import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard/ProductCard'
import Title from '../components/Title/Title'
import BreadCrumbs from '../components/breadCrumbs/BreadCrumbs'
import { AiOutlineShoppingCart } from '../../node_modules/react-icons/ai'

const Cart = () => {
  const cart = useSelector(state => state.products.cart)
  return (
    <div className="bg-zinc-300 min-h-screen">
      <Title>
        <div className="relative w-60 m-auto">
          <span>Cart</span>
          <AiOutlineShoppingCart size={'40px'} className="absolute top-1 right-2" />
        </div>
      </Title>
      <div className="container m-auto border-l-2 border-r-2 pb-4 bg-zinc-700 border-zinc-600 px-4">
        <BreadCrumbs cart={true} />
        <div className="flex flex-col mt-4">
          {cart &&
            cart.map((product, index) => (
              <ProductCard
                key={product.id}
                id={index}
                brand={product.brand}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating}
                count={product.count}
                style={'w-full mb-5'}
                btn={false}
                del={true}
                activeCount={true}
              />
            ))}
        </div>
        <p className='text-6xl font-bold'>Total Price: {cart.reduce((prev, curr) => prev + curr.total, 0)} $</p>
      </div>
    </div>
  )
}

export default Cart
