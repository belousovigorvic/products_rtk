import './App.css'
import Title from './components/Title/Title'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsData, addToCart } from './store/productsSlice'
import ProductCard from './components/ProductCard/ProductCard'
import { Pagination } from 'antd'
import CounterProducts from './components/counterProducts/CounterProducts'

function App() {
  const [currentPage, setCurreentPage] = useState(1)

  const dispatch = useDispatch()
  const { data, cart, loading, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProductsData(currentPage * 10))
  }, [dispatch, currentPage])

  if (loading) {
    return (
      <div className="h-screen text-6xl text-center flex items-center justify-center">
        Loading...
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const addToCartHandle = product => {
    dispatch(addToCart(product))
    console.log(cart)
  }

  return (
    <div className="min-h-screen">
      <Title>Products</Title>
      <div className="container m-auto">
        <div className="flex flex-wrap gap-6 justify-around py-6">
          {data.products &&
            data.products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                brand={product.brand}
                description={product.description}
                price={product.price}
                rating={product.rating}
                count={product.count}
                btn={true}
                handleClick={() => {
                  addToCartHandle(product)
                }}
              />
            ))}
        </div>
        <div className="flex justify-center py-4">
          <Pagination
            pageSize={1}
            total={10}
            current={currentPage}
            onChange={page => {
              setCurreentPage(page)
            }}
          />
        </div>
      </div>
      <CounterProducts />
    </div>
  )
}

export default App
