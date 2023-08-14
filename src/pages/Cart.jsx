import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard/ProductCard'
import Title from '../components/Title/Title'
const Cart = () => {
  const cart = useSelector(state => state.products.cart)
  return (
    <div>
      <Title>Cart</Title>
      <div className="container m-auto">
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
              />
            ))}
        </div>
        <p>Total Price: {cart.reduce((prev, curr) => prev + curr.price, 0)}</p>
      </div>
    </div>
  )
}

export default Cart
